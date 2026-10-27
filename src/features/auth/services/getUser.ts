import type { User } from "../types"
import { apiClient } from "@/lib/apiClient"

export const getUser = async (): Promise<User> => {
  const {
    id,
    username,
    name,
    email,
    roles,
    capabilities,
  } = await apiClient<User>(
    "/wp/v2/users/me?context=edit",
    { method: "GET" }
  )

  return {
    id,
    username,
    name,
    email,
    roles,
    capabilities,
  }
}
