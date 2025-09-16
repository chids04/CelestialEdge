import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { z } from 'zod'

export const Route = createFileRoute('/waitlist')({
  component: WaitlistPage,
  ssr: false,
})

function WaitlistPage() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  // Email validation schema
  const emailSchema = z.object({
    email: z
      .email('Please enter a valid email address')
      .min(5, 'Email is too short')
      .max(255, 'Email is too long'),
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    // Email validation using Zod
    const result = emailSchema.safeParse({ email })
    if (!result.success) {
      setError(result.error.issues[0]?.message || 'Invalid email')
      setIsSubmitting(false)
      return
    }

    try {
      // Here you'll add your Supabase API call
      // For now, we'll simulate the request
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setIsSuccess(true)
      setEmail('')
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen text-white bg-[#0a0a0f] relative overflow-hidden">
      {/* Celestial background layers */}
      <div className="absolute inset-0 bg-[url('/backgrounds/dark.png')] bg-cover bg-fixed opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d14] to-[#0a0a0f]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(59,130,246,0.06),transparent_70%)]" />

      {/* Animated stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-40 animate-twinkle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10 animate-float"
            style={{
              width: `${50 + Math.random() * 100}px`,
              height: `${50 + Math.random() * 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(${Math.random() > 0.5 ? '59,130,246' : '147,51,234'}, 0.3), transparent)`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-2xl mx-auto text-center">
          {/* Header Section */}
          <div className="mb-16 animate-fadeInUp">
            <div className="inline-block mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full animate-pulse-gentle" />
              <h1 className="relative sparkle-text text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
                Join the Cosmos
              </h1>
            </div>

            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-4">
              Be among the first to explore the most secure NFT marketplace in
              the galaxy
            </p>

            <div className="flex items-center justify-center space-x-8 text-gray-400 text-sm sm:text-base">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Early Access</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span>Exclusive Rewards</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <span>Zero Fees</span>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div
            className="animate-slideInUp"
            style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
          >
            {!isSuccess ? (
              <div className="celestial-card p-8 sm:p-12 rounded-3xl border border-gray-800/50 backdrop-blur-xl bg-[#141420]/80 shadow-2xl relative overflow-hidden">
                {/* Card background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl" />
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <div className="relative z-10">
                  <div className="mb-8">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 celestial-glow">
                      Reserve Your Spot
                    </h2>
                    <p className="text-gray-400 text-lg">
                      Enter your email to join thousands of cosmic explorers
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative group">
                      <Input
                        type="email"
                        placeholder="your.email@galaxy.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isSubmitting}
                        className="w-full h-14 px-6 text-lg bg-[#0a0a0f]/50 border-gray-700/50 rounded-xl text-white placeholder:text-gray-500 focus:border-blue-500/50 focus:ring-blue-500/20 transition-all duration-300 backdrop-blur-sm"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>

                    {error && (
                      <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm animate-slideInUp">
                        {error}
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting || !email}
                      className="celestial-button w-full h-14 text-xl font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center space-x-2">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Joining the Cosmos...</span>
                          </>
                        ) : (
                          <>
                            <span>Join Waitlist</span>
                            <span className="text-xl">🚀</span>
                          </>
                        )}
                      </span>

                      {/* Button glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </Button>
                  </form>

                  <div className="mt-8 pt-6 border-t border-gray-800/50">
                    <p className="text-gray-500 text-sm flex items-center justify-center space-x-2">
                      <span>🔒</span>
                      <span>Your email is safe with us. No spam, ever.</span>
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              /* Success State */
              <div className="celestial-card p-8 sm:p-12 rounded-3xl border border-green-500/30 backdrop-blur-xl bg-[#141420]/80 shadow-2xl relative overflow-hidden animate-pulse-gentle">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-3xl" />
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent" />

                <div className="relative z-10 text-center">
                  <div className="mb-6">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-3xl animate-bounce">
                      ✨
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4 celestial-glow">
                      Welcome to the Cosmos!
                    </h2>
                    <p className="text-gray-300 text-lg">
                      You're now on the waitlist. Get ready for an incredible
                      journey through the stars.
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-center space-x-3 text-green-400">
                      <span className="text-xl">🎁</span>
                      <span>Exclusive early access rewards</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 text-blue-400">
                      <span className="text-xl">⚡</span>
                      <span>Priority marketplace features</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 text-purple-400">
                      <span className="text-xl">🌟</span>
                      <span>Special founder NFT collection</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => setIsSuccess(false)}
                    className="celestial-button px-8 py-3 bg-[#1a1a24] hover:bg-[#1e1e2a] text-white rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                  >
                    Join Another Email
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Additional Info */}
          <div
            className="mt-16 animate-fadeIn"
            style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="text-3xl">🛡️</div>
                <h3 className="text-lg font-semibold text-white">Secure</h3>
                <p className="text-gray-400 text-sm">
                  Military-grade security for your digital assets
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-3xl">⚡</div>
                <h3 className="text-lg font-semibold text-white">Fast</h3>
                <p className="text-gray-400 text-sm">
                  Lightning-fast transactions across the galaxy
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-3xl">🌟</div>
                <h3 className="text-lg font-semibold text-white">Exclusive</h3>
                <p className="text-gray-400 text-sm">
                  Access to verified collections and rare NFTs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
