
import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from "@/app/store/hooks"

function PublicRoute() {
  const status = useAppSelector((state) => state.auth.status)

  if (status === "loading") {
    return null
  }

  if (status === "authenticated") {
    return <Navigate to="/dashboard" replace />
  }

  return <Outlet />
}

export default PublicRoute
