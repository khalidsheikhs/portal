import { apiClient } from "@/lib/apiClient"
import type { ForgotPasswordResponse } from "../types"

export const forgotPassword = async (
  credentials: { email: string }
): Promise<ForgotPasswordResponse> => {
  const response = await apiClient<ForgotPasswordResponse>(
    "/bdpwr/v1/reset-password",
    {
      method: "POST",
      body: JSON.stringify(credentials),
    }
  )

  return response
}