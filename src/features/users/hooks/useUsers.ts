
import { useAppSelector } from "@/app/store/hooks"

export default function useUsers() {
  const { users, status, error } = useAppSelector(
    (state) => state.users
  )

  return {
    users,
    loading: status === "loading",
    error,
  }
}