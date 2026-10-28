import type { LoaderFunctionArgs } from "react-router-dom"
import { queryClient } from "@/app/providers/QueryProvider"
import { usersQueryOptions } from "./queries"

export async function usersLoader(_args: LoaderFunctionArgs) {
  await queryClient.query(usersQueryOptions)

  return null
}