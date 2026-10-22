import { Outlet } from "react-router-dom"

function Auth() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left branding section */}
        <section className="relative hidden overflow-hidden bg-primary lg:flex lg:flex-col lg:justify-between">
          {/* Decorative shapes */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />
          <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-white/10" />

          {/* Logo / Brand */}
          <div className="relative z-10 p-10 xl:p-14">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary font-bold">
                A
              </div>

              <span className="text-2xl font-bold text-white">
                AdminPanel
              </span>
            </div>
          </div>

          {/* Welcome content */}
          <div className="relative z-10 px-10 pb-10 xl:px-14 xl:pb-14">
            <h1 className="max-w-xl text-4xl font-bold leading-tight text-white xl:text-5xl">
              Manage your business from one powerful dashboard.
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/80 xl:text-lg">
              Manage users, categories, content and more from a simple and
              intuitive administration panel.
            </p>
          </div>

          {/* Footer */}
          <div className="relative z-10 px-10 pb-8 xl:px-14">
            <p className="text-sm text-white/60">
              © 2026 AdminPanel. All rights reserved.
            </p>
          </div>
        </section>

        {/* Right authentication section */}
        <section className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-10 xl:px-16">
          <div className="w-full max-w-md">
            {/* Mobile logo */}
            <div className="mb-8 flex items-center justify-center lg:hidden">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white font-bold">
                  A
                </div>

                <span className="text-2xl font-bold text-slate-900">
                  AdminPanel
                </span>
              </div>
            </div>

            {/* Auth page */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
              <Outlet />
            </div>

            {/* Mobile footer */}
            <p className="mt-6 text-center text-xs text-slate-500 lg:hidden">
              © 2026 AdminPanel. All rights reserved.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Auth