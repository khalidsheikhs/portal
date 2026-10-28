import { useAppSelector } from "@/app/store/hooks"

export default function useSelectedUser() {
  const { user } = useAppSelector(
    (state) => state.selectedUser
  )

  return {
    selectedUser: user
  }
}