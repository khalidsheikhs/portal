import { z } from "zod"

export const resetPasswordSchema = z.object({
  email: z.string().trim().email("Please enter a valid email"),
  code: z.string().trim().min(1, "Please enter the reset code"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  }
)

export type ResetPasswordFormValues = z.infer<
  typeof resetPasswordSchema
>