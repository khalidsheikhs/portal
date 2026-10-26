import { apiClient } from "@/lib/apiClient"
import type { LoginRequest, LoginResponse } from "../types"
import { tokenStorage } from "./tokenStorage"
import { authSession } from "./authSession"

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

  tokenStorage.set(response.token)
  authSession.set()

  return response
}