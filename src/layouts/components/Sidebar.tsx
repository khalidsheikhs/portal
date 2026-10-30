import { useMemo } from "react"
import MenuItem from "@/components/ui/MenuItem"
import { SIDEBAR_ITEMS } from "@/config/navigation"
import type { BaseMenuItem } from "@/types/navigation"
import { canAccessPage, UserRole } from "@/features/access"
// import { useAppDispatch, useAppSelector } from "@/app/store/hooks"
// import { toggleSidebar, hideMobileMenu } from "@/app/store/slices/sidebar"
import { useShallow } from "zustand/react/shallow"
import { useAuth } from "@/features/auth/stores"
import { useSidebar } from "@/stores/sidebar"

// Filter restricted items and their nested children.
const filterMenuItems = <T extends BaseMenuItem>(
  items: T[],
  userRoles: UserRole[]
): T[] => {
  return items.reduce<T[]>((visibleItems, item) => {
    if (item.requiredPage && !canAccessPage(item.requiredPage, userRoles)) {
      return visibleItems
    }

    if ("children" in item && Array.isArray(item.children)) {
      const children = filterMenuItems(item.children, userRoles)

      // Hide the parent when all its children are hidden.
      if (children.length === 0) {
        return visibleItems
      }

      visibleItems.push({
        ...item,
        children,
      })

      return visibleItems
    }

    visibleItems.push(item)
    return visibleItems
  }, [])
}

function Sidebar() {
  // const dispatch = useAppDispatch()
  // const { sidebarCollapsed, mobileMenu } = useAppSelector((state) => state.sidebar)
  // const roles = useAppSelector((state) => state.auth.user?.roles ?? [])
  const roles = useAuth((state) => state.user?.roles ?? [])

  const {
    sidebarCollapsed,
    toggleSidebar,
    mobileMenu,
    hideMobileMenu,
  } = useSidebar(
    useShallow((state) => ({
      sidebarCollapsed: state.sidebarCollapsed,
      toggleSidebar: state.toggleSidebar,
      mobileMenu: state.mobileMenu,
      hideMobileMenu: state.hideMobileMenu,
    }))
  )

  const visibleMenuItems = useMemo(() => filterMenuItems(SIDEBAR_ITEMS, roles), [roles])

  return (
    <aside
      className={`
        fixed inset-0 z-50 bg-white
        md:relative md:z-auto md:block
        ${mobileMenu ? "block" : "hidden md:block"}
        ${sidebarCollapsed ? "md:w-16" : "md:w-64"}
      `}
    >
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b px-4">
          <button
            type="button"
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
            onClick={() => hideMobileMenu()}
          >
            ✕
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-2">
          {visibleMenuItems.map((menu) => (
            <MenuItem
              key={menu.item}
              {...menu}
              collapsed={sidebarCollapsed}
              onNavigate={() => hideMobileMenu()}
            />
          ))}
        </nav>

        {/* Collapse */}
        <div className="border-t p-4">
          <button
            type="button"
            className="w-full rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white"
            onClick={() => toggleSidebar()}
          >
            {sidebarCollapsed ? "→" : "Collapse"}
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar