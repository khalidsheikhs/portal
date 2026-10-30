import { create } from "zustand"
import type { User } from "./types"

type AuthState = {
    user: User | null
    status: "loading" | "authenticated" | "unauthenticated"
}

type AuthActions = {
  setAuth: (user: User) => void
  unsetAuth: () => void
}

type AuthStore =  AuthState & AuthActions

export const useAuth = create<AuthStore>()((set) => ({
  user: null,
  status: "loading",
  setAuth: (user: User) => set({ user, status: "authenticated" }),
  unsetAuth: () => set({ user: null, status: "unauthenticated" }),
}))