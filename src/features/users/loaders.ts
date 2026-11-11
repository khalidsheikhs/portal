import type { LoaderFunctionArgs } from "react-router-dom"
import { queryClient } from "@/app/providers/QueryProvider"
import { usersQueryOptions } from "./queries/usersQueryOptions"
import { userQueryOptions } from "./queries/userQueryOptions"
import { useAuth } from "@/features/auth"
import { getPagination } from "@/utils"

export async function usersLoader({ request }: LoaderFunctionArgs) {
  const user = useAuth.getState().user

  if (!user)
    return null

  const { pageNumber, PageSize } = getPagination(
    new URL(request.url).searchParams
  )

  await queryClient.query({
    ...usersQueryOptions({ page: pageNumber, size: PageSize }),
    staleTime: 1000 * 60 * 5,
  })

  return null
}

export async function userLoader({ params }: LoaderFunctionArgs) {
  const user = useAuth.getState().user

  if (!user)
    return null

  const id = Number(params.id)

  if (!Number.isInteger(id) || id <= 0)
    throw new Response("Invalid user ID", { status: 400 })

  return queryClient.query({
    ...userQueryOptions(id),
    staleTime: "static",
  })
}