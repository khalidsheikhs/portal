import { create } from "zustand"
import type { User } from "./types"

type SelectedUserState = {
  user: User | null
}

type SelectedUserActions = {
  selectUser: (user: User | null) => void
}

type SelectedUserStore = SelectedUserState & SelectedUserActions

export const useSelectedUser = create<SelectedUserStore>()((set)=>({
   user: null,
   selectUser: (user) => set({ user }),
}))

type PaginationStore = {
  pageSize: number
  setPageSize: (pageSize: number) => void
}

export const usePagination = create<PaginationStore>()((set) => ({
  pageSize: 10,
  setPageSize: (pageSize) => set({ pageSize }),
}))