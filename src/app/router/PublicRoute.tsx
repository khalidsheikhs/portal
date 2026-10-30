import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "@/features/auth"

function PublicRoute() {
  const status = useAuth((state) => state.status)

  if (status === "loading") {
    return null
  }

  if (status === "authenticated") {
    return <Navigate to="/dashboard" replace />
  }

  return <Outlet />
}

export default PublicRoute
