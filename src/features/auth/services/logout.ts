import { apiClient } from "@/lib/apiClient"
import { token } from "./token"

export const logout = async (): Promise<void> => {
  try {
    await apiClient<{ logged_out: boolean }>(
      "/vendor-secure-auth/v1/logout",
      { method: "POST" }
    )
  } finally {
    if (token.get()) token.clear()
  }
}