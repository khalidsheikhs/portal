import { useAuth } from "@/features/auth"
import { canAccessPage } from "./canAccessPage"
import type { PageKey } from "./types"

export function useCanAccessPage(page: PageKey): boolean {
  const userRoles = useAuth((state) => state.user?.roles ?? [])
  return canAccessPage(page, userRoles)
}
