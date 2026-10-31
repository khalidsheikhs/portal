import useAppQuery from "@/hooks/useAppQuery"
import { categoriesQueryOptions } from "./queries"

export function useCategories() {
  const { data, loading, error } = useAppQuery(categoriesQueryOptions)

  return {
    categories: data ?? [],
    loading,
    error,
  }
}