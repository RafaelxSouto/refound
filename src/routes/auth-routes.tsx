import { Routes, Route } from 'react-router'

import { SingIn } from '../pages/signin'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SingIn />} />
    </Routes>
  )
}
