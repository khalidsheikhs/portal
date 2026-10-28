import { useQuery } from "@tanstack/react-query"
import { usersQueryOptions } from "../queries"

export default function useUsers() {
  const { data, isLoading, error } = useQuery(usersQueryOptions)

  return {
    users: data ?? [],
    loading: isLoading,
    error,
  }
}