import { queryOptions } from "@tanstack/react-query"
import { getUser } from "../services/getUser"

export const userQueryOptions = (id: number) =>
  queryOptions({
    queryKey: ["users", id],
    queryFn: () => getUser(id),
    enabled: id > 0,
  })