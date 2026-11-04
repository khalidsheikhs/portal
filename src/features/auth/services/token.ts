import { useToken } from "../stores/token"

export const token = {
  get() {
    const { token } = useToken.getState()
    return token ?? sessionStorage.getItem("token")
  },

  set(nonce: string) {
    useToken.getState().setToken(nonce)
    sessionStorage.setItem("token", nonce)
  },

  clear() {
    useToken.getState().clearToken()
    sessionStorage.removeItem("token")
  },
}