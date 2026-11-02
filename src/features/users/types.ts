import type { BaseUser } from "@/types/user"
import { UserRole } from "@/features/access"

export type User = Omit<BaseUser, "email"> & {
  email?: string
  username?: string
  first_name?: string
  last_name?: string
  nickname?: string
  url?: string
  description?: string
  link?: string
  slug?: string
  locale?: string
  roles?: UserRole[]
  registered_date?: string
  capabilities?: Record<string, boolean>
  extra_capabilities?: Record<string, boolean>
  avatar_urls?: {
    24?: string
    48?: string
    96?: string
  }
}