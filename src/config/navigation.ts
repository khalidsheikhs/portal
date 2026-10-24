import type { MenuItem } from "@/types/navigation"

import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  Palette,
  Plug,
  Image,
  Folder,
  Users,
  UserCircle,
  Settings,
} from "lucide-react"

export const SIDEBAR_ITEMS: MenuItem[] = [
  {
    item: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
    requiredPage: "dashboard",
  },
  {
    item: "Posts",
    path: "/posts",
    icon: FileText,
    requiredPage: "posts",
    children: [
      {
        item: "All Posts",
        path: "/posts",
        requiredPage: "posts",
      },
      {
        item: "Add New",
        path: "/posts/add",
        requiredPage: "posts",
      },
      {
        item: "Categories",
        path: "/categories",
        requiredPage: "categories",
      },
      {
        item: "Tags",
        path: "/tags",
        requiredPage: "tags",
      },
    ],
  },
  {
    item: "Media",
    path: "/media",
    icon: Image,
    requiredPage: "media",
    children: [
      {
        item: "Library",
        path: "/media",
        requiredPage: "media",
      },
      {
        item: "Add New",
        path: "/media/add",
        requiredPage: "media",
      },
    ],
  },
  {
    item: "Pages",
    path: "/pages",
    icon: FileText,
    requiredPage: "pages",
    children: [
      {
        item: "All Pages",
        path: "/pages",
        requiredPage: "pages",
      },
      {
        item: "Add New",
        path: "/pages/add",
        requiredPage: "pages",
      },
    ],
  },
  {
    item: "Comments",
    path: "/comments",
    icon: MessageSquare,
    requiredPage: "comments",
  },
  {
    item: "Appearance",
    path: "/appearance",
    icon: Palette,
    requiredPage: "appearance",
  },
  {
    item: "Plugins",
    path: "/plugins",
    icon: Plug,
    requiredPage: "plugins",
  },
  {
    item: "Users",
    path: "/users",
    icon: Users,
    requiredPage: "users",
    children: [
      {
        item: "All Users",
        path: "/users",
        requiredPage: "users",
      },
      {
        item: "Add New",
        path: "/users/add",
        requiredPage: "users",
      },
    ],
  },
  {
    item: "Profile",
    path: "/profile",
    icon: UserCircle,
    requiredPage: "profile",
  },
  {
    item: "Settings",
    path: "/settings/general",
    icon: Settings,
    requiredPage: "settings",
    children: [
      {
        item: "General",
        path: "/settings/general",
        requiredPage: "settings",
      },
      {
        item: "Writing",
        path: "/settings/writing",
        requiredPage: "settings",
      },
      {
        item: "Reading",
        path: "/settings/reading",
        requiredPage: "settings",
      },
      {
        item: "Discussion",
        path: "/settings/discussion",
        requiredPage: "settings",
      },
      {
        item: "Media",
        path: "/settings/media",
        requiredPage: "settings",
      },
      {
        item: "Permalinks",
        path: "/settings/permalinks",
        requiredPage: "settings",
      },
      {
        item: "Privacy",
        path: "/settings/privacy",
        requiredPage: "settings",
      },
    ],
  },
  {
    item: "Sections",
    path: "/sections",
    icon: Folder,
    requiredPage: "sections",
  },
]