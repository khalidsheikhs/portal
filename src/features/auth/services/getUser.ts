import type { User } from "../types"
import { tokenStorage } from "./tokenStorage"
import { apiClient } from "@/lib/apiClient"

export const getUser = async (): Promise<User> => {
  const token_ = tokenStorage.get()

  if (!token_) {
    throw new Error("No token found")
  }

  const response = await apiClient<User>(
    "/wp/v2/users/me",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token_}`,
      },
    }
  )

  return {
    id: response.id,
    name: response.name,
    slug: response.slug,
  }
}