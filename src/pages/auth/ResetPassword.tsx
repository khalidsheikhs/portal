import { Link } from "react-router-dom"
import { ResetPasswordForm } from "@/features/auth"

function ResetPassword() {
  return (
    <div>
      {/* Heading */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Reset your password
        </h1>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Enter the reset code sent to your email address and choose a new password.
        </p>
      </div>

      {/* Form */}
      <ResetPasswordForm />

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

export default ResetPassword