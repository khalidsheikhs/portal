import { UserRole } from "./roles"

export const pagePermissions = {
  dashboard: [
    UserRole.Administrator,
    UserRole.Editor,
    UserRole.Author,
    UserRole.Contributor,
    UserRole.Subscriber,
  ],
  posts: [
    UserRole.Administrator,
    UserRole.Editor,
    UserRole.Author,
    UserRole.Contributor,
  ],
  media: [
    UserRole.Administrator,
    UserRole.Editor,
    UserRole.Author,
  ],
  pages: [
    UserRole.Administrator,
    UserRole.Editor,
  ],
  comments: [
    UserRole.Administrator,
    UserRole.Editor,
  ],
  categories: [
    UserRole.Administrator,
    UserRole.Editor,
  ],
  users: [
    UserRole.Administrator,
  ],
  appearance: [
    UserRole.Administrator,
  ],
  plugins: [
    UserRole.Administrator,
  ],
  settings: [
    UserRole.Administrator,
  ],
} satisfies Record<string, UserRole[]>
