import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { UsersState } from "./types"
import { getUsers } from "./services"

const initialState: UsersState = {
  users: [],
  selectedUser: null,
  status: "idle",
  error: null,
}

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    return await getUsers()
  }
)

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    selectUser(state, action) {
      state.selectedUser = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading"
        state.error = null
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.users = action.payload
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message ?? "Failed to fetch users"
      })
  },
})

export const { selectUser } = usersSlice.actions
export default usersSlice.reducer