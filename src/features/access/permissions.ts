import { UserRole } from "./roles"

export const pagePermissions = {
  dashboard: [
    UserRole.Administrator,
    UserRole.Editor,
    UserRole.Author,
    UserRole.Contributor,
    UserRole.Subscriber,
  ],

  // Posts: Authors can publish their own posts.
  // Contributors can write posts but cannot publish.
  posts: [
    UserRole.Administrator,
    UserRole.Editor,
    UserRole.Author,
    UserRole.Contributor,
  ],

  // WordPress Media requires upload_files.
  media: [
    UserRole.Administrator,
    UserRole.Editor,
    UserRole.Author,
  ],

  // Only administrators and editors manage Pages.
  pages: [
    UserRole.Administrator,
    UserRole.Editor,
  ],

  // Comments moderation requires edit_posts and moderate_comments.
  comments: [
    UserRole.Administrator,
    UserRole.Editor,
  ],

  categories: [
    UserRole.Administrator,
    UserRole.Editor,
  ],

  tags: [
    UserRole.Administrator,
    UserRole.Editor,
  ],

  // User management is administrator-only for this setup.
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

  // All authenticated WordPress roles can access their own profile.
  profile: [
    UserRole.Administrator,
    UserRole.Editor,
    UserRole.Author,
    UserRole.Contributor,
    UserRole.Subscriber,
  ],

  // Custom section: not a standard WordPress menu.
  // Adjust these roles to match your custom feature.
  sections: [
    UserRole.Administrator,
    UserRole.Editor,
  ],
} satisfies Record<string, UserRole[]>
