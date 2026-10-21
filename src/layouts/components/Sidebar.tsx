import MenuItem from "@/components/ui/MenuItem"
import { SIDEBAR_ITEMS } from "@/config/navigation"
import { useCanAccessPage } from "@/features/access"
import type { BaseMenuItem, MenuItem as SidebarMenuItem } from "@/types/navigation"
import { useAppDispatch, useAppSelector } from "@/app/store/hooks"
import { toggleSidebar, closeMobileSidebar } from "@/app/store/slices/sidebar"

function Sidebar() {
  const dispatch = useAppDispatch()

  const { sidebarCollapsed, mobileSidebarOpen } = useAppSelector(
    (state) => state.sidebar
  )

  // Filter restricted items and their nested children.
  const filterMenuItems = <T extends BaseMenuItem>(
    items: T[]
  ): T[] => {
    return items.reduce<T[]>((visibleItems, item) => {
      if (item.requiredPage && !useCanAccessPage(item.requiredPage)) {
        return visibleItems
      }

      if ("children" in item && Array.isArray(item.children)) {
        const children = filterMenuItems(item.children)

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

  const visibleMenuItems = filterMenuItems(
    SIDEBAR_ITEMS
  ) as SidebarMenuItem[]

  return (
    <aside
      className={`
        fixed inset-0 z-50 bg-white
        md:relative md:z-auto md:block
        ${mobileSidebarOpen ? "block" : "hidden md:block"}
        ${sidebarCollapsed ? "md:w-16" : "md:w-64"}
      `}
    >
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b px-4">
          <button
            type="button"
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
            onClick={() => dispatch(closeMobileSidebar())}
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
              onNavigate={() => dispatch(closeMobileSidebar())}
            />
          ))}
        </nav>

        {/* Collapse */}
        <div className="border-t p-4">
          <button
            type="button"
            className="w-full rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white"
            onClick={() => dispatch(toggleSidebar())}
          >
            {sidebarCollapsed ? "→" : "Collapse"}
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar