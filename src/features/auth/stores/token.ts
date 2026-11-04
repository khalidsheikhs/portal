import { create } from "zustand"

type tokenStore = {
  token: string | null
  setToken: (nonce: string | null) => void
  clearToken: () => void
}

export const useToken = create<tokenStore>((set) => ({
  token: null,
  setToken: (nonce: string | null) => set({ token: nonce }),
  clearToken: () => set({ token: null }),
}))