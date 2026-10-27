import { getUser } from "./getUser"
import { csrfNonceSession } from "./csrfNonceSession"

export const validateToken = async (): Promise<boolean> => {
  if (!csrfNonceSession.get()) return false

  try {
    await getUser()
    return true
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
