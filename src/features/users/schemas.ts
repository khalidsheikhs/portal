import { z } from "zod"
import { UserRole } from "@/features/access"

const roleValues = Object.values(UserRole) as [
  UserRole,
  ...UserRole[],
]

export const userSchema = z.object({
  username: z
    .string()
    .trim()
    .min(1, "Please enter a username"),

  first_name: z.string().trim(),
  last_name: z.string().trim(),

  nickname: z
    .string()
    .trim()
    .min(1, "Please enter a nickname"),

  email: z
    .string()
    .trim()
    .min(1, "Please enter an email address")
    .email("Please enter a valid email address"),

  url: z
    .string()
    .trim()
    .refine(
      (value) => !value || z.url().safeParse(value).success,
      "Please enter a valid website URL",
    ),

  description: z.string(),

  roles: z.array(z.enum(roleValues)),

  password: z.string(),
})

export type UserFormValues = z.infer<typeof userSchema>