import { useNavigate } from "react-router-dom"
// import { showMobileMenu } from "@/app/store/slices/sidebar"
// import { useAppSelector } from "@/app/store/hooks" // useAppDispatch,
import { useSidebar } from "@/stores/sidebar"
import { logout } from "@/features/auth" // unsetAuth,
import { useShallow } from "zustand/react/shallow" 
import { useAuth } from "@/features/auth"

function Header() {
  // const dispatch = useAppDispatch()
  const {
      user,
      status,
      unsetAuth,
    } = useAuth(
      useShallow((state) => ({
        user: state.user,
        status: state.status,
        unsetAuth:state.unsetAuth,
      }))
    )
  // const { user, status } = useAppSelector((state) => state.auth)

  const showMobileMenu = useSidebar((state) => state.showMobileMenu)

  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error("Could not clear the server authentication cookie.", error)
    }

    // dispatch(unsetAuth())
    unsetAuth()
    navigate("/login", { replace: true })
  }

  return (
    <header className="flex h-16 items-center border-b border-gray-200 bg-white px-4 sm:px-6 lg:px-8 justify-between">
      {/* Mobile hamburger */}
      <button
        type="button"
        className="mr-4 rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
        onClick={() => showMobileMenu()}
        aria-label="Open sidebar"
      >
        ☰
      </button>

      <h2 className="text-lg font-semibold text-gray-800 sm:text-xl">
        Header UI
      </h2>
      <div className="relative">
        {status === "loading" ? (
          <span className="text-sm text-gray-500">Loading user...</span>
        ) : (
          user && (
            <details className="group relative">
              <summary className="flex cursor-pointer list-none items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
                <span>{user.name}</span>
                <span aria-hidden="true" className="text-xs">
                  ▼
                </span>
              </summary>

              <div className="absolute right-0 z-50 mt-2 w-48 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
                <button
                  type="button"
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  onClick={(event) => {
                    event.currentTarget
                      .closest("details")
                      ?.removeAttribute("open")
                  }}
                >
                  Settings
                </button>

                <div className="my-1 border-t border-gray-100" />

                <button
                  type="button"
                  onClick={handleLogout}
                  className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                >
                  Logout
                </button>
              </div>
            </details>
          )
        )}
      </div>
    </header>
  )
}

export default Header