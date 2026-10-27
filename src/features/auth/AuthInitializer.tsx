import { useEffect } from "react"
import { useAppDispatch } from "@/app/store/hooks"
import { getUser } from "./services/getUser"
import { csrfNonceSession } from "./services/csrfNonceSession"
import { setAuthenticated, setUnauthenticated } from "./slices"

function AuthInitializer() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    let cancelled = false

    const initializeAuth = async () => {
      const csrfNonce = csrfNonceSession.get()

      if (!csrfNonce) {
        dispatch(setUnauthenticated())
        return
      }

      try {
        const user = await getUser()

        if (!cancelled) {
          dispatch(setAuthenticated(user))
        }
      } catch {
        if (!cancelled) {
          if (csrfNonceSession.get()) csrfNonceSession.clear()
          dispatch(setUnauthenticated())
        }
      }
    }

    void initializeAuth()

    return () => {
      cancelled = true
    }
  }, [dispatch])

  return null
}

export default AuthInitializer