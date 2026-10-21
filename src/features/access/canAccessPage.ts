import { pagePermissions } from "./permissions"
import type { PageKey } from "./types"
import { UserRole } from "./roles"

export function canAccessPage(
  page: PageKey,
  userRoles: UserRole[]
): boolean {
  return pagePermissions[page].some((role) =>
    userRoles.includes(role)
  )
}
