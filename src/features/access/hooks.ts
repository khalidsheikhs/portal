import { useAppSelector } from "@/app/store/hooks"
import { canAccessPage } from "./canAccessPage"
import type { PageKey } from "./types"

export function useCanAccessPage(page: PageKey): boolean {
  const userRoles = useAppSelector(
    (state) => state.auth.user?.roles ?? []
  )

  return canAccessPage(page, userRoles)
}
