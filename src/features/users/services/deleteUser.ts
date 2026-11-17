import { apiClient } from "@/lib/apiClient"
import type { BaseUser as User } from "@/types/user"

export type DeleteUserResponse = {
  deleted: boolean
  previous: User & { username: string }
}

export const deleteUser = async (
  id: User["id"]
): Promise<DeleteUserResponse> => {
  return apiClient<DeleteUserResponse>(
    `/wp/v2/users/${id}?force=true&reassign=1`,
    {
      method: "DELETE",
    }
  )
}