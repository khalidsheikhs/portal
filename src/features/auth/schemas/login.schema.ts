import { z } from "zod"

export const loginSchema = z.object({
  // email: z.email("Please enter a valid email address"),
  username: z
    .string()
    .trim()
    .min(1, "Please enter your username or email"),
  password: z
    .string()
    .min(1, "Password is required"),
})

export type LoginFormValues = z.infer<typeof loginSchema>