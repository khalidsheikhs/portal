import { useMutation } from "@tanstack/react-query"
import type { LoginRequest } from "../types"
import { login } from "../services/login"
import { getUserInfo } from "../services/getUserInfo"
import { token } from "../services/token"
import { useAuth } from "../stores/auth"

export function useLogin() {
  const setAuth = useAuth((state) => state.setAuth)

  return useMutation({
    mutationFn: async (credentials: LoginRequest) => {
      await login(credentials)

      try {
        return await getUserInfo()
      } catch (error) {
        if (token.get()) token.clear()
        throw error
      }
    },

    onSuccess: (user) => {
      setAuth(user)
    },
  })
}