import { Link } from "react-router-dom"

function ForgotPassword() {
  return (
    <div>
      {/* Heading */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Forgot your password?
        </h1>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Enter your email address and we'll send you a link to reset your
          password.
        </p>
      </div>

      {/* Form */}
      <form className="mt-8 space-y-5">
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Email address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-primary/30 active:scale-[0.99]"
        >
          Send reset link
        </button>
      </form>

      {/* Back to Login */}
      <div className="mt-8 text-center">
        <Link
          to="/login"
          className="text-sm font-semibold text-primary hover:text-blue-700"
        >
          ← Back to sign in
        </Link>
      </div>
    </div>
  )
}

export default ForgotPassword