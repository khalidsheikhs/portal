import { queryOptions } from "@tanstack/react-query"
import { getUsers } from "./services"

export const usersQueryOptions = queryOptions({
  queryKey: ["users"],
  queryFn: getUsers,
  staleTime: 1000 * 60 * 5,
})