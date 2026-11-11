import { apiClient } from "@/lib/apiClient"
import type { User } from "../types"

export const getUsers = async (
  page: number,
  perPage: number,
): Promise<{ users: User[]; total: number; totalPages: number }> => {
  const response = await apiClient<User[]>(
    `/wp/v2/users?context=edit&page=${page}&per_page=${perPage}`,
    {
      method: "GET",
    },
    true
  )

  return {
    users: response.data,
    total: Number(response.headers.get("X-WP-Total")),
    totalPages: Number(response.headers.get("X-WP-TotalPages")),
  }
}