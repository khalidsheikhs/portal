import type { LoaderFunctionArgs } from "react-router-dom"
import { useAuth } from "@/features/auth"
import { queryClient } from "@/app/providers/QueryProvider"
import { usersQueryOptions } from "./queries"

export async function usersLoader(_args: LoaderFunctionArgs) {
  const user = useAuth.getState().user

  if (!user) {
    return null
  }

  await queryClient.query({
    ...usersQueryOptions,
    staleTime: 1000 * 60 * 5,
  })

  return null
}