import type { LoaderFunctionArgs } from "react-router-dom"
import { useAuth } from "@/features/auth"
import { queryClient } from "@/app/providers/QueryProvider"
import { usersQueryOptions } from "./queries/usersQueryOptions"
import { userQueryOptions } from "./queries/userQueryOptions"

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

export async function userLoader({ params }: LoaderFunctionArgs) {
  const user = useAuth.getState().user

  if (!user) {
    return null
  }

  const id = Number(params.id)

  if (!Number.isInteger(id) || id <= 0) {
    throw new Response("Invalid user ID", { status: 400 })
  }

  return queryClient.query({
    ...userQueryOptions(id),
    staleTime: "static",
  })
}