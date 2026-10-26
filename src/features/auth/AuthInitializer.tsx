import { useEffect } from "react"
import { useAppDispatch } from "@/app/store/hooks"

import { getUser } from "./services/getUser"
// import { tokenStorage } from "./services/tokenStorage"
import { authSession } from "./services/authSession"


import {
  setAuthenticated,
  setUnauthenticated,
} from "./slices"

function AuthInitializer() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    let cancelled = false

    const initializeAuth = async () => {
      // const storedToken = tokenStorage.get()
      const isLoggedIn = authSession.get()

      if (!isLoggedIn) {
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
          // tokenStorage.clear()
          authSession.clear()
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