import { useEffect } from "react"
import { getUserInfo } from "./services/getUserInfo"
import { token } from "./services/token"
import { useAuth } from "./stores/auth"

export function AuthInitializer() {
  const setAuth = useAuth((state) => state.setAuth)
  const unsetAuth = useAuth((state) => state.unsetAuth)

  useEffect(() => {
    let cancelled = false

    const initializeAuth = async () => {
      const token_ = token.get()

      if (!token_) {
        unsetAuth()
        return
      }

      try {
        const user = await getUserInfo()
        if (!cancelled) setAuth(user)
      } catch {
        if (!cancelled) {
          token.clear()
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