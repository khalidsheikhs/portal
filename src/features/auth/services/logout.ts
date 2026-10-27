import { apiClient } from "@/lib/apiClient"
import { csrfNonceSession } from "./csrfNonceSession"

export const logout = async (): Promise<void> => {
  try {
    await apiClient<{ logged_out: boolean }>(
      "/vendor-secure-auth/v1/logout",
      { method: "POST" }
    )
  } finally {
    if (csrfNonceSession.get()) csrfNonceSession.clear()
  }
}