import { useAppDispatch } from "@/app/store/hooks"
import { openMobileSidebar } from "@/app/store/slices/sidebar"
import { useAppSelector } from "@/app/store/hooks"

function Header() {
  const dispatch = useAppDispatch()
  const { user, status } = useAppSelector(
    (state) => state.auth
  )

  return (
    <header className="flex h-16 items-center border-b border-gray-200 bg-white px-4 sm:px-6 lg:px-8 justify-between">
      {/* Mobile hamburger */}
      <button
        type="button"
        className="mr-4 rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
        onClick={() => dispatch(openMobileSidebar())}
        aria-label="Open sidebar"
      >
        ☰
      </button>

      <h2 className="text-lg font-semibold text-gray-800 sm:text-xl">
        Header UI
      </h2>
      {
        status === "checking"
          ? <span>Loading user...</span>
          : (user && <p>{user.user_nicename}</p>)
      }
    </header>
  )
}

export default Header