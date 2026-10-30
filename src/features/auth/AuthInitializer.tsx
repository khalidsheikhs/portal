import { useEffect } from "react"
import { getUser } from "./services/getUser"
import { csrfNonceSession } from "./services/csrfNonceSession"
import { useAuth } from "./stores"

function AuthInitializer() {
  const setAuth = useAuth((state) => state.setAuth)
  const unsetAuth = useAuth((state) => state.unsetAuth)

  useEffect(() => {
    let cancelled = false

    const initializeAuth = async () => {
      const csrfNonce = csrfNonceSession.get()

      if (!csrfNonce) {
        unsetAuth()
        return
      }

      try {
        const user = await getUser()
        if (!cancelled) setAuth(user)
      } catch {
        if (!cancelled) {
          if (csrfNonceSession.get()) csrfNonceSession.clear()
          unsetAuth()
        }
      }
    }

    void initializeAuth()

    return () => {
      cancelled = true
    }
  }, []) // dispatch, 

  return null
}

export default AuthInitializer