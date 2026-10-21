export const UserRole = {
  Administrator: "administrator",
  Editor: "editor",
  Author: "author",
  Contributor: "contributor",
  Subscriber: "subscriber",
} as const

export type UserRole = (typeof UserRole)[keyof typeof UserRole]