// import { useState } from "react"
import { Link } from "react-router-dom" //, useNavigate
// import { login } from "@/features/auth/services/authService"
import { LoginForm } from "@/features/auth"

function Login() {
  // const navigate = useNavigate()

  /* const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()

    setError("")

    if (!email.trim()) {
      setError("Please enter your email address.")
      return
    }

    if (!password) {
      setError("Please enter your password.")
      return
    }

    try {
      setIsLoading(true)

      const response = await login({
        email,
        password,
      })

      console.log("Login successful:", response)

      // Temporary:
      // Later we will put authentication into Redux.
      localStorage.setItem("token", response.accessToken)

      // navigate("/dashboard")
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      )
    } finally {
      setIsLoading(false)
    }
  } */

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
      {/*<form onSubmit={handleSubmit} className="mt-8 space-y-5">
        {/\* Email *\/}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-slate-700">
            Email address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/\* Password *\/}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700">
              Password
            </label>

            <Link
              to="/forgot-password"
              className="text-sm font-medium text-primary hover:text-blue-700"
            >
              Forgot password?
            </Link>
          </div>

          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/\* Remember me *\/}
        <div className="flex items-center">
          <input
            id="remember"
            name="remember"
            type="checkbox"
            className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
          />

          <label
            htmlFor="remember"
            className="ml-2 text-sm text-slate-600"
          >
            Remember me
          </label>
        </div>

        {/\* Error *\/}
        {error && (
          <p className="text-sm text-red-600">
            {error}
          </p>
        )}

        {/\* Login button *\/}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-primary/30 active:scale-[0.99]"
        >
          {isLoading ? "Signing in..." : "Sign in"}
        </button>
      </form> */}
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

      {/* Register */}
      <p className="mt-8 text-center text-sm text-slate-500">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-semibold text-primary hover:text-blue-700"
        >
          Create an account
        </Link>
      </p>
    </div>
  )
}

export default Login