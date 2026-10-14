import { createSlice } from "@reduxjs/toolkit"

export type SidebarState = {
  sidebarCollapsed: boolean
  mobileSidebarOpen: boolean
}

const initialState: SidebarState = {
  sidebarCollapsed: false,
  mobileSidebarOpen: false,
}

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.sidebarCollapsed = !state.sidebarCollapsed
    },
    openMobileSidebar(state) {
      state.mobileSidebarOpen = true
    },
    closeMobileSidebar(state) {
      state.mobileSidebarOpen = false
    },
  },
})

export const { toggleSidebar, openMobileSidebar, closeMobileSidebar } = sidebarSlice.actions
export default sidebarSlice.reducer