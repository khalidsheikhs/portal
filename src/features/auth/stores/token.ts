import { create } from "zustand"

type TokenStore = {
  token: string | null
  get: () => string | null
  set: (nonce: string) => void
  clear: () => void
}

export const useToken = create<TokenStore>((set, get) => ({
  token: sessionStorage.getItem("token"),

  get: () => get().token,

  set: (nonce) => {
    sessionStorage.setItem("token", nonce)
    set({ token: nonce })
  },

  clear: () => {
    sessionStorage.removeItem("token")
    set({ token: null })
  },
}))