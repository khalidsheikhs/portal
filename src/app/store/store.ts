import { configureStore } from "@reduxjs/toolkit"
import sidebarReducer from "./slices/sidebar"
import { usersReducer } from "@/features/users"
import { authReducer } from "@/features/auth"

 const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    users: usersReducer,
    auth: authReducer,
  },
})

export default store