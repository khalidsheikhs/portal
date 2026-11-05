import { apiClient } from "@/lib/apiClient"
import { useToken } from "../stores/token"

export const logout = async (): Promise<void> => {
  try {
    await apiClient<{ logged_out: boolean }>(
      "/vendor-secure-auth/v1/logout",
      { method: "POST" }
    )
  } finally {
    useToken.getState().clear()
  }
}