import type { LoaderFunctionArgs } from "react-router-dom"
import { queryClient } from "@/app/providers/QueryProvider"
import { usersQueryOptions } from "./queries"

export async function usersLoader(_args: LoaderFunctionArgs) {
  await queryClient.query({
    ...usersQueryOptions,
    staleTime: 1000 * 60 * 5,
  })

  return null
}