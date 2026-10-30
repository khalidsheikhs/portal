import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "@/features/auth"
import { useCanAccessPage } from "../hooks"
import type { PageKey } from "../types"

interface RoleBasedRouteProps {
  page: PageKey
}

function RoleBasedRoute({ page }: RoleBasedRouteProps) {
  const status = useAuth((state) => state.status)
  const canAccessPage = useCanAccessPage(page)

  if (status === "loading") {
    return null
  }

  if (status === "unauthenticated") {
    return <Navigate to="/login" replace />
  }

  if (!canAccessPage) {
    return <Navigate to="/dashboard" replace />
  }

  return <Outlet />
}

export default RoleBasedRoute