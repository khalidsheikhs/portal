import { useQuery } from "@tanstack/react-query"
import type { UseQueryOptions, QueryKey } from "@tanstack/react-query"

export default function useAppQuery<
  TQueryFnData,
  TError = Error,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: UseQueryOptions<
    TQueryFnData,
    TError,
    TData,
    TQueryKey
  >
) {
  const { data, isLoading, error } = useQuery({
    ...options,
  })

  return {
    data,
    loading: isLoading,
    error,
  }
}