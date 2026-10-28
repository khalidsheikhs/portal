import { queryOptions } from "@tanstack/react-query"
import { getUsers } from "./services"

export const usersQueryOptions = queryOptions({
  queryKey: ["users"],
  queryFn: getUsers,
})