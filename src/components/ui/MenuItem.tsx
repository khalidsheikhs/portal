import { useState } from "react"
import { NavLink } from "react-router-dom"
import type { MenuItem as Item } from "@/types/navigation"

function MenuItem({
  item,
  path,
  icon: Icon,
  children,
  collapsed = false,
  onNavigate,
}: Item & {
  collapsed?: boolean
  onNavigate?: () => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const hasChildren = Boolean(children?.length)

  if (!hasChildren) {
    return (
      <NavLink
        to={path}
        onClick={onNavigate}
        className={({ isActive }) =>
          `
            block rounded-lg px-3 py-2
            text-sm font-medium
            ${
              isActive
                ? "bg-gray-100 text-primary"
                : "text-gray-700 hover:bg-gray-100"
            }
          `
        }
      >
        <div className="flex items-center">
          <Icon size={20} />
          {!collapsed && <span className="ml-2">{item}</span>}
        </div>
      </NavLink>
    )
  }

  return (
    <div className="relative">
      {/* Parent item */}
      {
        (!path || collapsed) ? (
          // No path: toggle submenu
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="
                  flex w-full items-center justify-between
                  rounded-lg px-3 py-2
                  text-sm font-medium text-gray-700
                  hover:bg-gray-100
                "
          >
            <div className="flex items-center">
              <Icon size={20} />
              {!collapsed && <span className="ml-2">{item}</span>}
            </div>

            {!collapsed && (
              <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
                ▼
              </span>
            )}
          </button>
        ) : (
          // Path exists: icon toggles, label navigates
          <div
            className="
                  flex w-full items-center justify-between
                  rounded-lg px-3 py-2
                  text-sm font-medium text-gray-700
                  hover:bg-gray-100
                "
          >
            <NavLink
              to={path}
              onClick={onNavigate}
              className={({ isActive }) =>
                `
                  block rounded-lg
                  text-sm font-medium
                  ${
                    isActive
                      ? "bg-gray-100 text-primary"
                      : "text-gray-700 hover:bg-gray-100"
                  }
                `
              }
            >
              <div className="flex items-center">
                <Icon size={20} />
                {!collapsed && <span className="ml-2">{item}</span>}
              </div>
            </NavLink>
            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="flex items-center"
              aria-label={`Toggle ${item} submenu`}
            >
              {!collapsed && (
                <span
                  className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              )}
            </button>
          </div>
        )
      }

      {/* Expanded sidebar submenu */}
      {isOpen && !collapsed && (
        <div className="ml-4 mt-1 space-y-1 border-l border-gray-200 pl-2">
          {children?.map((child) => (
            <NavLink
              key={child.item}
              to={child.path}
              onClick={onNavigate}
              className={({ isActive }) =>
                `
                  block rounded-lg px-3 py-2
                  text-sm
                  ${
                    isActive
                      ? "bg-gray-100 font-medium text-primary"
                      : "text-gray-600 hover:bg-gray-100"
                  }
                `
              }
            >
              {child.item}
            </NavLink>
          ))}
        </div>
      )}

      {/* Collapsed sidebar flyout */}
      {isOpen && collapsed && (
        <div
          className="
            absolute
            left-full
            top-0
            z-50
            ml-2
            min-w-[200px]
            rounded-lg
            border
            border-gray-200
            bg-white
            p-2
            shadow-lg
          "
        >
          <div className="mb-1 px-3 py-2 text-sm font-semibold text-gray-800">
            {item}
          </div>

          <div className="space-y-1">
            {children?.map((child) => (
              <NavLink
                key={child.item}
                to={child.path}
                onClick={onNavigate}
                className={({ isActive }) =>
                  `
                    block rounded-lg px-3 py-2
                    text-sm
                    ${
                      isActive
                        ? "bg-gray-100 font-medium text-primary"
                        : "text-gray-600 hover:bg-gray-100"
                    }
                  `
                }
              >
                {child.item}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default MenuItem