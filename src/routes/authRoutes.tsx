import { Routes, Route } from 'react-router'
import { AuthLayout } from '../components/AuthLayout'
import { SingIn } from '../pages/signIn'
import { SignUp } from '../pages/signUp'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<SingIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </Routes>
  )
}
