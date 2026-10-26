import { useMutation } from "@tanstack/react-query"
import type { LoginRequest } from "../types"
import { useAppDispatch } from "@/app/store/hooks"
import { login } from "../services/login"
import { getUser } from "../services/getUser"
// import { tokenStorage } from "../services/tokenStorage"
import { authSession } from "../services/authSession"
import { setAuthenticated } from "../slices"

export function useLogin() {
  const dispatch = useAppDispatch()

  return useMutation({
    mutationFn: async (credentials: LoginRequest) => {
      await login(credentials)

      try {
        return await getUser()
      } catch (error) {
        // tokenStorage.clear()
        authSession.clear()
        throw error
      }
    },

    onSuccess: (user) => {
      dispatch(setAuthenticated(user))
    },
  })
}