import { Navigate, Outlet, type RouteObject } from "react-router-dom"
import PublicRoute from "./PublicRoute"
import ProtectedRoute from "./ProtectedRoute"
import AuthLayout from "@/layouts/Auth"
import AdminLayout from "@/layouts/Admin"
import { RoleBasedRoute } from "@/features/access"
import { RouteLoader } from "@/components"
import { usersLoader, userLoader } from "@/features/users/loaders"
// import Dashboard from "@/pages/Dashboard" // Import when load wihtout router lazyloading

import { lazyRoute } from "./routerHelpers"

export const routes: RouteObject[] = [
  {
    HydrateFallback: RouteLoader,
    Component: Outlet,
    children: [
      // Public routes
      {
        element: <PublicRoute />,
        children: [
          {
            element: <AuthLayout />,
            children: [
              {
                path: "/login",
                lazy: lazyRoute(
                  () => import("@/pages/auth/Login")
                ),
              },
              {
                path: "/register",
                lazy: lazyRoute(
                  () => import("@/pages/auth/Register")
                ),
              },
              {
                path: "/forgot-password",
                lazy: lazyRoute(
                  () => import("@/pages/auth/ForgotPassword")
                ),
              },
              {
                path: "/reset-password",
                lazy: lazyRoute(
                  () => import("@/pages/auth/ResetPassword")
                ),
              },
            ],
          },
        ],
      },

      // Protected routes
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <AdminLayout />,
            children: [
              {
                path: "/",
                element: <Navigate to="/dashboard" replace />,
              },
              {
                path: "/dashboard",
                // element: <Dashboard />, // Load Without router lazyloading
                lazy: lazyRoute(
                  () => import("@/pages/Dashboard")
                ),
              },
              {
                element: <RoleBasedRoute page="users" />,
                children: [
                  {
                    path: "/users",
                    loader: usersLoader,
                    lazy: lazyRoute(
                      () => import("@/pages/users/Users")
                    ),
                  },
                  {
                    path: "/users/add",
                    lazy: lazyRoute(
                      () => import("@/pages/users/AddUser")
                    ),
                  },
                  {
                    path: "/users/update/:id",
                    loader: userLoader,
                    lazy: lazyRoute(
                      () => import("@/pages/users/UpdateUser")
                    ),
                  },
                ],
              },
              {
                element: <RoleBasedRoute page="categories" />,
                children: [
                  {
                    path: "/categories",
                    lazy: lazyRoute(
                      () => import("@/pages/Categories")
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },

      // Not found
      {
        path: "*",
        lazy: lazyRoute(
          () => import("@/pages/notFound")
        ),
      },
    ],
  },
]