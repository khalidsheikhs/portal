import { apiClient } from "@/lib/apiClient"
import type { PasswordRequest, PasswordResponse } from "../types"

export const resetPassword = async (
  data: PasswordRequest
): Promise<PasswordResponse> => {
  return apiClient<PasswordResponse>(
    "/bdpwr/v1/set-password",
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  )
}