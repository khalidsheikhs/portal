import { create } from "zustand"

type SidebarState = {
  sidebarCollapsed: boolean
  mobileMenu: boolean
}

type SidebarActions = {
  toggleSidebar: () => void
  showMobileMenu: () => void
  hideMobileMenu: () => void
}

type SidebarStore = SidebarState & SidebarActions

export const useSidebar = create<SidebarStore>()((set) => ({
  sidebarCollapsed: false,
  mobileMenu: false,

  toggleSidebar: () =>
    set((state) => ({
      sidebarCollapsed: !state.sidebarCollapsed,
    })),

  showMobileMenu: () =>
    set({ mobileMenu: true }),

  hideMobileMenu: () =>
    set({ mobileMenu: false }),
}))