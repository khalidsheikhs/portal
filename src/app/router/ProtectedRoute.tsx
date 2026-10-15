import { Navigate, Outlet } from "react-router-dom"

function ProtectedRoute() {
  const isAuthenticated = !!localStorage.getItem("accessToken") || false // temporary

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default ProtectedRoute