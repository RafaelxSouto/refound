import { useState } from 'react'
import { Input } from '../components/Input'
import { Button } from '../components/Button'

export function SingIn() {
  const [email, setEmail] = useState('')
  const [passoword, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    console.log(email, passoword)
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        required
        legend="senha"
        type="password"
        placeholder="Ra1@.-"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button type="submit" isLoading={isLoading}>Entrar</Button>
    </form>
  )
}
