import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { resetPasswordSchema, type ResetPasswordFormValues } from "../schemas/resetPassword.schema"
import { Input, Button, ErrorMessage } from "@/components"
import { resetPassword } from "../services/resetPassword"

function ResetPasswordForm() {
  const {
    register,
    reset,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: sessionStorage.getItem("resetEmail") ?? "",
      code: "",
      password: "",
      confirmPassword: "",
    },
  })

  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const navigate = useNavigate()

  const onSubmit = async (data: ResetPasswordFormValues) => {
    setSuccessMessage("")

    try {
      const response = await resetPassword({
        email: data.email,
        code: data.code,
        password: data.password,
      })

      if (response.data.status === 200) {
        setSuccessMessage(response.message)
        sessionStorage.removeItem("resetEmail")
        reset()

        setTimeout(() => {
          navigate("/login")
        }, 5000)
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong"

      setError("root.server", { message })

      if (message.includes("maximum number of attempts allowed")) {
        setTimeout(() => {
          navigate("/forgot-password")
        }, 3000)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-5">
      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Email address
        </label>

        <Input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="Enter your email"
          {...register("email")}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="px-4 py-3"
        />

        <div id="email-error">
          <ErrorMessage message={errors.email?.message} />
        </div>
      </div>

      {/* Reset Code */}
      <div>
        <label
          htmlFor="code"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Reset code
        </label>

        <Input
          id="code"
          type="text"
          autoComplete="one-time-code"
          placeholder="Enter the reset code"
          {...register("code")}
          aria-invalid={Boolean(errors.code)}
          aria-describedby={errors.code ? "code-error" : undefined}
          className="px-4 py-3"
        />

        <div id="code-error">
          <ErrorMessage message={errors.code?.message} />
        </div>
      </div>

      {/* New Password */}
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          New password
        </label>

        <Input
          id="password"
          type="password"
          autoComplete="new-password"
          placeholder="Enter your new password"
          {...register("password")}
          aria-invalid={Boolean(errors.password)}
          aria-describedby={errors.password ? "password-error" : undefined}
          className="px-4 py-3"
        />

        <div id="password-error">
          <ErrorMessage message={errors.password?.message} />
        </div>
      </div>

      {/* Confirm Password */}
      <div>
        <label
          htmlFor="confirmPassword"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Confirm password
        </label>

        <Input
          id="confirmPassword"
          type="password"
          autoComplete="new-password"
          placeholder="Confirm your new password"
          {...register("confirmPassword")}
          aria-invalid={Boolean(errors.confirmPassword)}
          aria-describedby={
            errors.confirmPassword ? "confirm-password-error" : undefined
          }
          className="px-4 py-3"
        />

        <div id="confirm-password-error">
          <ErrorMessage message={errors.confirmPassword?.message} />
        </div>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 text-sm font-semibold"
      >
        {isSubmitting ? "Resetting..." : "Reset password"}
      </Button>

      {errors.root?.server?.message && (
        <ErrorMessage message={errors.root.server.message} />
      )}

      {successMessage && (
        <p className="mt-1 text-sm text-success" role="status">
          {successMessage}
        </p>
      )}
    </form>
  )
}

export default ResetPasswordForm