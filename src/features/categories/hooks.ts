import { useQuery } from "@tanstack/react-query"
import { categoriesQueryOptions } from "./queries"

export default function useCategories() {
  const { data, isLoading, error } = useQuery(categoriesQueryOptions)

  return {
    categories: data ?? [],
    loading: isLoading,
    error,
  }
}