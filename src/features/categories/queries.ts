import { queryOptions } from "@tanstack/react-query"
import { getCategories } from "./services"

export const categoriesQueryOptions = queryOptions({
  queryKey: ["categories"],
  queryFn: getCategories,
})