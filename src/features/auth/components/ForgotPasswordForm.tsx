import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { forgotPasswordSchema, type ForgotPasswordFormValues } from "../schemas/forgotPassword.schema"
import { Input, Button, FormError } from "@/components"
import { forgotPassword } from "../services/forgotPassword"

function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    try {
      await forgotPassword(data)
      // console.log("Forgot password form submitted with data:", response)
    } catch (error) {
      setError("root.server", {
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong",
      })
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
          <FormError message={errors.email?.message} />
        </div>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 text-sm font-semibold"
      >
        {isSubmitting ? "Sending..." : "Send reset link"}
      </Button>
      {errors.root?.server?.message && (
        <FormError message={errors.root.server.message} />
      )}
    </form>
  )
}

export default ForgotPasswordForm