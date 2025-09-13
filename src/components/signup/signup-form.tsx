import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import { z } from 'zod'
import { Connector, useConnect } from 'wagmi'

const emailSchema = z.string().email('Please enter a valid email address')

export function SignupForm() {
  const [email, setEmail] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [validationError, setValidationError] = useState('')
  const { connectors, connect } = useConnect()

  useEffect(() => {
    validateEmail(email)
  }, [email])

  const handleConnectWallet = async (connector: Connector) => {
    connect({ connector })
  }

  const validateEmail = (value: string) => {
    try {
      emailSchema.parse(value)
      setIsEmailValid(true)
      setValidationError('')
    } catch (error) {
      setIsEmailValid(false)
      setValidationError('invalid email')
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  return (
    <div className="min-h-screen h-screen flex items-center justify-center bg-[url('/backgrounds/dark.png')] bg-cover bg-black">
      <div className="container mx-auto py-8 flex flex-col gap-6 items-center justify-center text-white">
        <h1 className="text-2xl font-bold text-white mb-4">sign up</h1>
        <Input
          type="email"
          placeholder="Email"
          className="w-full max-w-xs px-4 sm:w-80 mx-4 md:w-96 lg:w-[400px]"
          onChange={handleEmailChange}
        />
        {email && validationError && (
          <p className="text-sm text-red-500">{validationError}</p>
        )}

        {connectors.map((connector) => (
          <Button
            key={connector.uid}
            disabled={!isEmailValid}
            className={`mt-2 ${!isEmailValid ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => handleConnectWallet(connector)}
          >
            {connector.name}
          </Button>
        ))}
      </div>
    </div>
  )
}
