import { Link } from "react-router-dom"
import { ForgotPasswordForm } from "@/features/auth"

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
      <ForgotPasswordForm />

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