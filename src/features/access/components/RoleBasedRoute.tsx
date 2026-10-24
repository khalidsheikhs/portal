import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from "@/app/store/hooks"
import { useCanAccessPage } from "../hooks"
import type { PageKey } from "../types"

interface RoleBasedRouteProps {
  page: PageKey
}

function RoleBasedRoute({ page }: RoleBasedRouteProps) {
  const status = useAppSelector((state) => state.auth.status)
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