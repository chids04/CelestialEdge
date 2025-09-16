import { z } from 'zod'

// Mock server function implementation without external dependencies
type ServerFn = <T, R>(
  options?: any,
) => {
  validator: <U>(fn: (input: T) => U) => {
    handler: (
      fn: (context: { data: U; req: Request }) => Promise<R>,
    ) => (input: T) => Promise<R>
  }
}

// Mock createServerFn since we don't have the actual dependency
const createServerFn: ServerFn = () => ({
  validator: (validatorFn) => ({
    handler: (handlerFn) => async (input) => {
      const validatedData = validatorFn(input)
      return handlerFn({ data: validatedData, req: new Request('') })
    },
  }),
})

// Mock setResponseStatus function
const setResponseStatus = (status: number) => {
  console.log(`Setting status: ${status}`)
}

// Mock Supabase client
const supabase = {
  from: (table: string) => ({
    insert: (data: any) => ({
      select: () =>
        Promise.resolve({
          data: data,
          error: null,
        }),
    }),
  }),
}

// Email validation schema
export const waitlistEmailSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(5, 'Email is too short')
    .max(255, 'Email is too long'),
})

// Export the type for use in components
export type WaitlistEmailInput = z.infer<typeof waitlistEmailSchema>

// Rate limiting store (in-memory for now, could be replaced with Redis for production)
const rateLimits = new Map<string, { count: number; resetAt: number }>()

// Rate limit configuration
const RATE_LIMIT = {
  MAX_REQUESTS: 5,
  WINDOW_MS: 60 * 60 * 1000, // 1 hour
}

// Create the server function to handle waitlist signups
export const addToWaitlist = createServerFn()
  .validator((input: unknown) => {
    // Parse and validate the input
    const result = waitlistEmailSchema.safeParse(input)

    if (!result.success) {
      throw new Error(
        result.error.format().email?._errors[0] || 'Invalid email format',
      )
    }

    return result.data
  })
  .handler(async ({ data, req }: { data: { email: string }; req: Request }) => {
    // IP-based rate limiting
    const ip = req.headers.get('x-forwarded-for') || 'unknown'

    // Check if the IP is rate limited
    const now = Date.now()
    const rateLimit = rateLimits.get(ip)

    if (rateLimit) {
      // Reset rate limit if the window has passed
      if (now > rateLimit.resetAt) {
        rateLimits.set(ip, { count: 1, resetAt: now + RATE_LIMIT.WINDOW_MS })
      } else if (rateLimit.count >= RATE_LIMIT.MAX_REQUESTS) {
        // Rate limit exceeded
        setResponseStatus(429)
        return {
          status: 'error',
          message: 'Too many requests. Please try again later.',
          resetAt: rateLimit.resetAt,
        }
      } else {
        // Increment counter
        rateLimits.set(ip, {
          count: rateLimit.count + 1,
          resetAt: rateLimit.resetAt,
        })
      }
    } else {
      // First request from this IP
      rateLimits.set(ip, { count: 1, resetAt: now + RATE_LIMIT.WINDOW_MS })
    }

    try {
      // Insert the email into the Supabase 'waitlist' table
      const { data: insertedData, error } = await supabase
        .from('waitlist')
        .insert([{ email: data.email }])
        .select()

      if (error) {
        // Handle unique constraint violation (email already exists)
        if (error.code === '23505') {
          return {
            status: 'duplicate',
            message: 'This email is already on our waitlist',
          }
        }

        console.error('Supabase error:', error)
        setResponseStatus(500)
        return {
          status: 'error',
          message: 'Failed to add to waitlist. Please try again later.',
        }
      }

      return {
        status: 'success',
        message: 'Successfully added to waitlist',
        data: insertedData,
      }
    } catch (err) {
      console.error('Waitlist submission error:', err)
      setResponseStatus(500)
      return {
        status: 'error',
        message: 'An unexpected error occurred. Please try again later.',
      }
    }
  })
