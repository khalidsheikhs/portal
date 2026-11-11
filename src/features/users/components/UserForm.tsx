import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { userSchema, type UserFormValues } from "../schemas"
import type { User } from "../types"
import { UserRole } from "@/features/access"
import { Input, Button, ErrorMessage } from "@/components"

type UserSubmitData = Omit<UserFormValues, "password"> & {
  name: string
  password?: string
}

type UserFormProps = {
  user?: User
  onSubmit: (data: UserSubmitData) => Promise<void> | void
}

function UserForm({ user, onSubmit }: UserFormProps) {
  const isEditing = Boolean(user)

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<UserFormValues>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      username: "",
      first_name: "",
      last_name: "",
      nickname: "",
      email: "",
      url: "",
      description: "",
      roles: [],
      password: "",
    },
  })

  // Populate form when user data is available
  useEffect(() => {
    if (user) {
      reset({
        username: user.username ?? "",
        first_name: user.first_name ?? "",
        last_name: user.last_name ?? "",
        nickname: user.nickname ?? "",
        email: user.email ?? "",
        url: user.url ?? "",
        description: user.description ?? "",
        roles: user.roles ?? [],
        password: "",
      })
    }
  }, [user, reset])

  const handleFormSubmit = async (data: UserFormValues) => {
    // Password is required when creating a user
    if (!isEditing && !data.password.trim()) {
      setError("password", {
        type: "manual",
        message: "Password is required",
      })
      return
    }

    // Generate display name automatically
    const name =
      [data.first_name, data.last_name]
        .filter(Boolean)
        .join(" ")
        .trim() || data.nickname

    // Exclude empty password when updating
    const { password, ...userData } = data

    const payload: UserSubmitData = {
      ...userData,
      name,
      ...(password.trim() ? { password } : {}),
    }

    await onSubmit(payload)
  }

  const roleOptions = Object.entries(UserRole).map(
    ([label, value]) => ({
      label,
      value,
    }),
  )

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      noValidate
      className="mt-4 space-y-5"
    >
      {/* Profile Picture */}
      {user?.avatar_urls?.[96] && (
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Profile Picture
          </label>

          <img
            src={user.avatar_urls[96]}
            alt={`${user.name}'s profile`}
            className="h-20 w-20 rounded-full object-cover"
          />
        </div>
      )}

      {/* Username */}
      <div>
        <label
          htmlFor="username"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Username
        </label>

        <Input
          id="username"
          type="text"
          placeholder="Enter username"
          {...register("username")}
          readOnly={isEditing}
          aria-invalid={Boolean(errors.username)}
          aria-describedby={errors.username ? "username-error" : undefined}
          className="px-4 py-3"
        />

        <div id="username-error">
          <ErrorMessage message={errors.username?.message} />
        </div>
      </div>

      {/* First Name */}
      <div>
        <label
          htmlFor="first_name"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          First Name
        </label>

        <Input
          id="first_name"
          type="text"
          placeholder="Enter first name"
          {...register("first_name")}
          aria-invalid={Boolean(errors.first_name)}
          className="px-4 py-3"
        />

        <ErrorMessage message={errors.first_name?.message} />
      </div>

      {/* Last Name */}
      <div>
        <label
          htmlFor="last_name"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Last Name
        </label>

        <Input
          id="last_name"
          type="text"
          placeholder="Enter last name"
          {...register("last_name")}
          aria-invalid={Boolean(errors.last_name)}
          className="px-4 py-3"
        />

        <ErrorMessage message={errors.last_name?.message} />
      </div>

      {/* Nickname */}
      <div>
        <label
          htmlFor="nickname"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Nickname *
        </label>

        <Input
          id="nickname"
          type="text"
          placeholder="Enter nickname"
          {...register("nickname")}
          aria-invalid={Boolean(errors.nickname)}
          aria-describedby={errors.nickname ? "nickname-error" : undefined}
          className="px-4 py-3"
        />

        <div id="nickname-error">
          <ErrorMessage message={errors.nickname?.message} />
        </div>
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Email *
        </label>

        <Input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="Enter email address"
          {...register("email")}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="px-4 py-3"
        />

        <div id="email-error">
          <ErrorMessage message={errors.email?.message} />
        </div>
      </div>

      {/* Website */}
      <div>
        <label
          htmlFor="url"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Website
        </label>

        <Input
          id="url"
          type="url"
          placeholder="https://example.com"
          {...register("url")}
          aria-invalid={Boolean(errors.url)}
          className="px-4 py-3"
        />

        <ErrorMessage message={errors.url?.message} />
      </div>

      {/* Biographical Info */}
      <div>
        <label
          htmlFor="description"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Biographical Info
        </label>

        <textarea
          id="description"
          rows={5}
          placeholder="Write a short biography..."
          {...register("description")}
          aria-invalid={Boolean(errors.description)}
          className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm"
        />

        <ErrorMessage message={errors.description?.message} />
      </div>

      {/* Roles */}
      <div>
        <label
          htmlFor="roles"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Roles
        </label>

        <select
          id="roles"
          multiple
          {...register("roles")}
          aria-invalid={Boolean(errors.roles)}
          className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm"
        >
          {roleOptions.map((role) => (
            <option key={role.value} value={role.value}>
              {role.label}
            </option>
          ))}
        </select>

        <p className="mt-1 text-xs text-slate-500">
          Hold Ctrl (Windows) or Command (Mac) to select multiple roles.
        </p>

        <ErrorMessage message={errors.roles?.message} />
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Password {!isEditing && "*"}
        </label>

        <Input
          id="password"
          type="password"
          autoComplete="new-password"
          placeholder={
            isEditing
              ? "Leave blank to keep current password"
              : "Enter password"
          }
          {...register("password")}
          aria-invalid={Boolean(errors.password)}
          aria-describedby={errors.password ? "password-error" : undefined}
          className="px-4 py-3"
        />

        <div id="password-error">
          <ErrorMessage message={errors.password?.message} />
        </div>
      </div>

      <div className="flex gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={() => navigate("/users")}
          className="w-full py-3 text-sm font-semibold"
        >
          Cancel
        </Button>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 text-sm font-semibold"
        >
          {isSubmitting
            ? "Saving..."
            : isEditing
              ? "Update User"
              : "Create User"}
        </Button>
      </div>

      {errors.root?.server?.message && (
        <ErrorMessage message={errors.root.server.message} />
      )}
    </form>
  )
}

export default UserForm