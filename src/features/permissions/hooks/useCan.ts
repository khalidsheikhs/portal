import { useAuth } from "@/features/auth"

export function useCan(capability: string): boolean {
  const user = useAuth((state) => state.user)
  return user?.capabilities?.[capability] ?? false
}