import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoute({ isAllowed = false, redirectTo = '/auth' }) {
  if (!isAllowed) return <Navigate to={redirectTo} replace />
  return <Outlet />
}

