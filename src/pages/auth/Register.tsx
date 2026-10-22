import { Link } from "react-router-dom"

function Register() {
  return (
    <div>
      {/* Heading */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Create your account
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Fill in the details below to create your account.
        </p>
      </div>

      {/* Register Form */}
      <form className="mt-8 space-y-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Full name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            autoComplete="name"
            className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

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

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Password
          </label>

          <input
            id="password"
            name="password"
            type="password"
            placeholder="Create a password"
            autoComplete="new-password"
            className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label
            htmlFor="confirmPassword"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Confirm password
          </label>

          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            autoComplete="new-password"
            className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Terms */}
        <div className="flex items-start">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
          />

          <label
            htmlFor="terms"
            className="ml-2 text-sm leading-5 text-slate-600"
          >
            I agree to the{" "}
            <a
              href="#"
              className="font-medium text-primary hover:text-blue-700"
            >
              Terms and Conditions
            </a>
          </label>
        </div>

        {/* Register button */}
        <button
          type="submit"
          className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-primary/30 active:scale-[0.99]"
        >
          Create account
        </button>
      </form>

      {/* Login */}
      <p className="mt-8 text-center text-sm text-slate-500">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-primary hover:text-blue-700"
        >
          Sign in
        </Link>
      </p>
    </div>
  )
}

export default Register