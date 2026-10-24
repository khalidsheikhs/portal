import { useAppSelector } from "@/app/store/hooks"
import { UserRole } from "@/features/access"

export function useHasRole(role: UserRole): boolean {
  return useAppSelector(
    (state) => state.auth.user?.roles.includes(role) ?? false
  )
}