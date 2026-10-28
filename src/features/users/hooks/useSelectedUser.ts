import { useAppSelector } from "@/app/store/hooks"

export default function useSelectedUsers() {
  const { user } = useAppSelector(
    (state) => state.selectedUser
  )

  return {
    selectedUser: user
  }
}