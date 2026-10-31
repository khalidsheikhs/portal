import { Link } from "react-router-dom"
import { LoginForm } from "@/features/auth"

function Login() {
  const handleGoogleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event)
  }

  return (
    <div>
      {/* Heading */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Welcome back
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Enter your credentials to access your account.
        </p>
      </div>

      {/* Login Form */}
      <LoginForm />

      {/* Divider */}
      <div className="my-6 flex items-center">
        <div className="flex-1 border-t border-slate-300" />
        <span className="px-4 text-sm text-slate-400">OR</span>
        <div className="flex-1 border-t border-slate-300" />
      </div>

      {/* Google Login */}
      <button
        disabled
        type="button"
        onClick={handleGoogleLogin}
        className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/20"
      >
        {/* Google Icon */}
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#4285F4"
            d="M23.49 12.27c0-.79-.07-1.55-.2-2.27H12v4.3h6.44a5.5 5.5 0 0 1-2.39 3.61v3h3.87c2.27-2.09 3.57-5.17 3.57-8.64Z"
          />
          <path
            fill="#34A853"
            d="M12 24c3.24 0 5.95-1.07 7.93-2.91l-3.87-3c-1.07.72-2.44 1.15-4.06 1.15-3.13 0-5.79-2.11-6.74-4.95H1.26v3.1A12 12 0 0 0 12 24Z"
          />
          <path
            fill="#FBBC05"
            d="M5.26 14.29A7.2 7.2 0 0 1 4.88 12c0-.79.14-1.56.38-2.29v-3.1H1.26A12 12 0 0 0 0 12c0 1.93.46 3.75 1.26 5.39l4-3.1Z"
          />
          <path
            fill="#EA4335"
            d="M12 4.76c1.77 0 3.35.61 4.6 1.8l3.44-3.44C17.95 1.19 15.24 0 12 0A12 12 0 0 0 1.26 6.61l4 3.1C6.21 6.87 8.87 4.76 12 4.76Z"
          />
        </svg>

        Continue with Google
      </button>

      {/* Forgot Password */}
      <p className="mt-8 text-center text-sm text-slate-500">
        Forget your password?{" "}
        <Link
          to="/forgot-password"
          className="font-semibold text-primary hover:text-blue-700"
        >
          Click here
        </Link>
      </p>

      {/* Register *\/}
      <p className="mt-8 text-center text-sm text-slate-500">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-semibold text-primary hover:text-blue-700"
        >
          Create an account
        </Link>
      </p> */}
    </div>
  )
}

export default Login