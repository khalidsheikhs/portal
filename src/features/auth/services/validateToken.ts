import { apiClient } from "@/lib/apiClient"
import { token } from "./tokenStorage"

type ValidateTokenResponse = {
  code: string
  data: {
    status: number
  }
}

export const validateToken = async (): Promise<boolean> => {
  const savedToken = token.get()

  if (!savedToken) {
    return false
  }

  try {
    await apiClient<ValidateTokenResponse>(
      "/jwt-auth/v1/token/validate",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${savedToken}`,
        },
      }
    )

    return true
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.startsWith("Request failed (")
    ) {
      const status = Number(
        error.message.match(/\((\d+)\)$/)?.[1]
      )

      if (status === 401 || status === 403) {
        token.clear()
        return false
      }
    }

    throw error
  }
}