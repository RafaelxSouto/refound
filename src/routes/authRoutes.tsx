import { Routes, Route } from 'react-router'
import { AuthLayout } from '../components/AuthLayout'
import { SingIn } from '../pages/signIn'
import { SignUp } from '../pages/signUp'
import { NotFound } from '../pages/NotFound'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<SingIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
