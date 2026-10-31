import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema, type LoginFormValues } from "../schemas/login.schema"
import { Input, Button, FormError } from "@/components"
import { useLogin } from "../hooks"
// import { useNavigate } from "react-router-dom"

function LoginForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  const { mutateAsync, isPending } = useLogin()
  // const navigate = useNavigate()

  const onSubmit = async (data: LoginFormValues) => {
    try {
      // const response = await login(data)
      await mutateAsync(data)
      // navigate("/dashboard")
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
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-4 space-y-5">
      <div>
        <label
          htmlFor="username"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Username or Email
        </label>

        <Input
          id="username"
          type="text"
          autoComplete="username"
          placeholder="Enter your username or email"
          {...register("username")}
          aria-invalid={Boolean(errors.username)}
          aria-describedby={errors.username ? "username-error" : undefined}
          className="px-4 py-3"
        />

        <div id="email-error">
          <FormError message={errors.username?.message} />
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Password
        </label>

        <Input
          id="password"
          type="password"
          autoComplete="current-password"
          placeholder="Enter your password"
          {...register("password")}
          aria-invalid={Boolean(errors.password)}
          aria-describedby={
            errors.password ? "password-error" : undefined
          }
          className="px-4 py-3"
        />

        <div id="password-error">
          <FormError message={errors.password?.message} />
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting || isPending}
        className="w-full py-3 text-sm font-semibold"
      >
        {(isSubmitting || isPending) ? "Signing in..." : "Sign in"}
      </Button>
      {errors.root?.server?.message && (
        <FormError message={errors.root.server.message} />
      )}
    </form>
  )
}

export default LoginForm
