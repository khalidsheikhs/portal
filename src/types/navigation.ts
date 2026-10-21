import type { LucideIcon } from "lucide-react"
import type { PageKey } from "@/features/access"

export type BaseMenuItem = {
  item: string
  path: string
  requiredPage?: PageKey
}

export type MenuItem = BaseMenuItem & {
  icon: LucideIcon
  children?: BaseMenuItem[]
}