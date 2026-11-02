import { apiClient } from "@/lib/apiClient"
import type { User } from "../types"

export const getUser = async (id: number): Promise<User> => {
  const response = await apiClient<User>(
    `/wp/v2/users/${id}?context=edit`,
    {
      method: "GET",
    }
  )

  return response
}