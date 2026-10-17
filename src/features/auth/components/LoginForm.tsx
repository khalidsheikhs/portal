import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"

import { loginSchema, type LoginFormValues } from "../schemas/login.schema"
import { Input, Button, FormError } from "@/components"
import { useLogin } from "../hooks/useLogin"

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
  const navigate = useNavigate()

  const onSubmit = async (data: LoginFormValues) => {
    try {
      // const response = await login(data)
      await mutateAsync(data)
      navigate("/dashboard")
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
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="mb-4">
        <label
          htmlFor="username"
          className="mb-1 block text-sm font-medium text-gray-700"
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
        />

        <div id="email-error">
          <FormError message={errors.username?.message} />
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="password"
          className="mb-1 block text-sm font-medium text-gray-700"
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
        />

        <div id="password-error">
          <FormError message={errors.password?.message} />
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting || isPending}
        className="w-full text-sm font-medium"
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
