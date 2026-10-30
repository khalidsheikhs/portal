import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { User } from "./types"

type AuthStatus =
  | "loading"
  | "authenticated"
  | "unauthenticated"

type AuthState = {
  user: User | null
  status: AuthStatus
}

const initialState: AuthState = {
  user: null,
  status: "loading",
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (
      state,
      action: PayloadAction<User>
    ) => {
      state.user = action.payload
      state.status = "authenticated"
    },

    unsetAuth: (state) => {
      state.user = null
      state.status = "unauthenticated"
    },
  },
})

export const {
  setAuth,
  unsetAuth,
} = authSlice.actions

export default authSlice.reducer