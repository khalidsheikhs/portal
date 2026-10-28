import useAppQuery from "@/hooks/useAppQuery"
import { usersQueryOptions } from "../queries"

export default function useUsers() {
  const { data, loading, error } = useAppQuery(usersQueryOptions)

  return {
    users: data ?? [],
    loading,
    error,
  }
}