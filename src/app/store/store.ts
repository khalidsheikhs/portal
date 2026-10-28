import { configureStore } from "@reduxjs/toolkit"
import sidebarReducer from "./slices/sidebar"
import { selectedUserReducer } from "@/features/users"
import { authReducer } from "@/features/auth"

 const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    selectedUser: selectedUserReducer,
    auth: authReducer,
  },
})

export default store