import { useMutation } from "@tanstack/react-query"
import type { LoginRequest } from "../types"
import { login } from "../services/login"
import { getUserInfo } from "../services/getUserInfo"
import { useToken } from "../stores/token"
import { useAuth } from "../stores/auth"

export function useLogin() {
  const setAuth = useAuth((state) => state.setAuth)
  const clearToken = useToken((state) => state.clear)

  return useMutation({
    mutationFn: async (credentials: LoginRequest) => {
      await login(credentials)
      return getUserInfo()
    },
    onSuccess: (user) => {
      setAuth(user)
    },
    onError: () => {
      clearToken()
    },
  })
}