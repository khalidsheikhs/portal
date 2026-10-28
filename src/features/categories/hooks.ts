import useAppQuery from "@/hooks/useAppQuery"
import { categoriesQueryOptions } from "./queries"

export default function useCategories() {
  const { data, loading, error } = useAppQuery(categoriesQueryOptions)

  return {
    categories: data ?? [],
    loading,
    error,
  }
}