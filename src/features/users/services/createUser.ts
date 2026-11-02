import type { User } from "../types"
import { apiClient } from "@/lib/apiClient"

export const createUser = async (user: Omit<User, "id">): Promise<User> => {
  const response = await apiClient<User>(
    "/wp/v2/users",
    { method: "POST", body: JSON.stringify(user) }
  )

  return response
}
