import { useMutation } from "@tanstack/react-query"
import type { LoginRequest } from "./types"
import { login } from "./services/login"
import { getUser } from "./services/getUser"
import { csrfNonceSession } from "./services/csrfNonceSession"
// import { useAppDispatch } from "@/app/store/hooks"
// import { setAuth } from "./slices"
import { useAuth } from "./stores"

export function useLogin() {
  // const dispatch = useAppDispatch()
  const setAuth = useAuth((state) => state.setAuth)

  return useMutation({
    mutationFn: async (credentials: LoginRequest) => {
      await login(credentials)

      try {
        return await getUser()
      } catch (error) {
        if (csrfNonceSession.get()) csrfNonceSession.clear()
        throw error
      }
    },

    onSuccess: (user) => {
      setAuth(user)
    },
  })
}