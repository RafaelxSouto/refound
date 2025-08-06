import { BrowserRouter } from 'react-router'
import { ManagerRoutes } from './ManagerRoutes'
import { AuthRoutes } from './authRoutes'
import { EmployeeRoutes } from './EmployeeRoutes'

export function Routes() {
  return (
    <BrowserRouter>
      <ManagerRoutes />
    </BrowserRouter>
  )
}
