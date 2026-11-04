import { apiClient } from "@/lib/apiClient"
import type { PasswordResponse } from "../types"

export const forgotPassword = async (
  credentials: { email: string }
): Promise<PasswordResponse> => {
  const response = await apiClient<PasswordResponse>(
    "/bdpwr/v1/reset-password",
    {
      method: "POST",
      body: JSON.stringify(credentials),
    }
  )

  return response
}