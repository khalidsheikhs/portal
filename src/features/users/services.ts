import { apiClient } from "@/lib/apiClient"
import type { User } from "./types"

export const getUsers = async (): Promise<User[]> => {
  const response = await apiClient<User[]>(
    "/wp/v2/users",
    {
      method: "GET",
    }
  )

  return response
}