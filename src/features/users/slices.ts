import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { User } from "./types"

const initialState: { user: User | null } = {
  user: null,
}

const selectedUserSlice = createSlice({
  name: "selected user",
  initialState,
  reducers: {
    selectUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload
    },
  },
})

export const { selectUser } = selectedUserSlice.actions
export default selectedUserSlice.reducer