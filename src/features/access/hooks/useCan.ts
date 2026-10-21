import { useAppSelector } from "@/app/store/hooks"

export function useCan(capability: string): boolean {
  return useAppSelector(
    (state) => state.auth.user?.capabilities[capability] === true
  )
}