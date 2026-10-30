import { UserRole } from "@/features/access"
import { useAuth } from "@/features/auth"

export function useHasRole(role: UserRole): boolean {
  const user = useAuth((state) => state.user)
  return user?.roles?.includes(role) ?? false
}