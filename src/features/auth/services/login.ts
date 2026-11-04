import { apiClient } from "@/lib/apiClient"
import type { LoginRequest, LoginResponse } from "../types"
import { token } from "./token"

export const login = async (
  credentials: LoginRequest
): Promise<LoginResponse> => {
  const response = await apiClient<LoginResponse>(
    "/jwt-auth/v1/token",
    {
      method: "POST",
      body: JSON.stringify(credentials),
    }
  )

  if (!response.csrf_nonce) {
    throw new Error("Login response did not include a CSRF nonce.")
  }

  token.set(response.csrf_nonce)

  return response
}