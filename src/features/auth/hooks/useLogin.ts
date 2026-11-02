import { useMutation } from "@tanstack/react-query"
import type { LoginRequest } from "../types"
import { login } from "../services/login"
import { getUserInfo } from "../services/getUserInfo"
import { csrfNonceSession } from "../services/csrfNonceSession"
import { useAuth } from "../stores"

export function useLogin() {
  const setAuth = useAuth((state) => state.setAuth)

  return useMutation({
    mutationFn: async (credentials: LoginRequest) => {
      await login(credentials)

      try {
        return await getUserInfo()
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