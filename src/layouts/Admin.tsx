import { Outlet } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Footer from "./components/Footer"

function Admin() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <Header />

        <main className="flex-1 min-w-0 p-6">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default Admin