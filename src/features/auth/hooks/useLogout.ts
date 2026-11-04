import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useAuth } from "../stores/auth"
import { logout } from "../services/logout"

export function useLogout() {
  const queryClient = useQueryClient()
  const unSetAuth = useAuth((state) => state.unsetAuth)

  return useMutation({
    mutationFn: logout,

    onSuccess: () => {
      queryClient.clear()
      unSetAuth()
    },
  })
}