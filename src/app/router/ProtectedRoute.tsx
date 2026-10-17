import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from "@/app/store/hooks"

function ProtectedRoute() {
  const status = useAppSelector((state) => state.auth.status)

  if (status === "loading") {
    return null
  }

  if (status === "unauthenticated") {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default ProtectedRoute