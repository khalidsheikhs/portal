import { queryOptions } from "@tanstack/react-query"
import { getUsers } from "../services/getUsers"

export const usersQueryOptions = ({
  page,
  size,
}: {
  page: number
  size: number
}) =>
  queryOptions({
    queryKey: ["users", page, size],
    queryFn: () => getUsers(page, size),
  })