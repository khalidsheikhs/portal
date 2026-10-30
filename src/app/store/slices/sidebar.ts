import { createSlice } from "@reduxjs/toolkit"

export type SidebarState = {
  sidebarCollapsed: boolean
  mobileMenu: boolean
}

const initialState: SidebarState = {
  sidebarCollapsed: false,
  mobileMenu: false,
}

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.sidebarCollapsed = !state.sidebarCollapsed
    },
    showMobileMenu(state) {
      state.mobileMenu = true
    },
    hideMobileMenu(state) {
      state.mobileMenu = false
    },
  },
})

export const { toggleSidebar, showMobileMenu, hideMobileMenu } = sidebarSlice.actions
export default sidebarSlice.reducer