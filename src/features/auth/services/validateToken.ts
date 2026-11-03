import { apiClient } from "@/lib/apiClient"
import { csrfNonceSession } from "./csrfNonceSession"

interface ValidateTokenResponse {
  code: string
  data?: {
    status?: number
  }
}

export const validateToken = async (): Promise<boolean> => {
  const csrfNonce = csrfNonceSession.get()

  if (!csrfNonce) {
    return false
  }

  try {
    const response = await apiClient<ValidateTokenResponse>(
      "/jwt-auth/v1/token/validate",
      { method: "POST" }
    )

    return response.code === "jwt_auth_valid_token"
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.startsWith("Request failed (")
    ) {
      const status = Number(error.message.match(/\((\d+)\)$/)?.[1])

      if (status === 401 || status === 403) {
        csrfNonceSession.clear()
        return false
      }
    }

    throw error
  }
}