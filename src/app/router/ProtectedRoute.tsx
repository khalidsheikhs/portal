import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "@/features/auth"

function ProtectedRoute() {
  const status = useAuth((state) => state.status)

  if (status === "loading") {
    return null
  }

  if (status === "unauthenticated") {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default ProtectedRoute