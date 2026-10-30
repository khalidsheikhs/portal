import { useEffect } from "react"
import { getUser } from "./services/getUser"
import { csrfNonceSession } from "./services/csrfNonceSession"
// import { useAppDispatch } from "@/app/store/hooks"
// import { setAuth, unsetAuth } from "./slices"
import { useAuth } from "./stores"

function AuthInitializer() {
  //const dispatch = useAppDispatch()
  const setAuth = useAuth((state) => state.setAuth)
  const unsetAuth = useAuth((state) => state.unsetAuth)

  useEffect(() => {
    let cancelled = false

    const initializeAuth = async () => {
      const csrfNonce = csrfNonceSession.get()

      if (!csrfNonce) {
        // dispatch(unsetAuth())
        unsetAuth()
        return
      }

      try {
        const user = await getUser()

        if (!cancelled) {
          // dispatch(setAuth(user))
          setAuth(user)
        }
      } catch {
        if (!cancelled) {
          if (csrfNonceSession.get()) csrfNonceSession.clear()
          // dispatch(unsetAuth())
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