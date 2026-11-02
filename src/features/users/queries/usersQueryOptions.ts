import { queryOptions } from "@tanstack/react-query"
import { getUsers } from "../services/getUsers"

export const usersQueryOptions = queryOptions({
  queryKey: ["users"],
  queryFn: getUsers,
})