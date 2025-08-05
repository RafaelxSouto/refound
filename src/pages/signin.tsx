import { Input } from '../components/Input'

export function SingIn() {
  return (
    <form className="w-full flex flex-col gap-4">
      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
      />

      <Input
        required
        legend="senha"
        type="password"
        placeholder="Ra1@.-"
      />
    </form>
  )
}
