import type { BaseUser } from "@/types/user"
import { UserRole } from "@/features/access"

export type LoginRequest = {
  username: string
  password: string
}

export type LoginResponse = {
  user_display_name: string
  user_nicename: string
  user_email: string
  csrf_nonce: string
}

export type User = BaseUser & {
  username: string
  roles: UserRole[]
  capabilities: Record<string, boolean>
}

export type PasswordRequest ={
  email: string
  code: string
  password: string
}

export type PasswordResponse = {
  data: {
    status: number
  }
  message: string
}