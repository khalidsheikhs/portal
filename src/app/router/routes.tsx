import { Navigate } from "react-router-dom"
import type { RouteObject } from "react-router-dom"

import AdminLayout from "@/layouts/AdminLayout"
import AuthLayout from "@/layouts/AuthLayout"

import PublicRoute from "./PublicRoute"
import LoginPage from "@/pages/auth/LoginPage"
import RegisterPage from "@/pages/auth/RegisterPage"
import ForgotPasswordPage from "@/pages/auth/ForgotPasswordPage"

import ProtectedRoute from "./ProtectedRoute"
import DashboardPage from "@/pages/DashboardPage"
import UsersPage from "@/pages/UsersPage"
import CategoriesPage from "@/pages/CategoriesPage"

import NotFoundPage from "@/pages/notFound"

const routes: RouteObject[] = [
  // Public routes
  {
    element: <PublicRoute />,
    children: [
      {
        element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPasswordPage />,
      },
    ],
  }
]
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
            element: <DashboardPage />,
          },
          {
            path: "/users",
            element: <UsersPage />,
          },
          {
            path: "/categories",
            element: <CategoriesPage />,
          },
        ],
      },
    ],
  },


  // 404
  {
    path: "*",
    element: <NotFoundPage />,
  },
]

export default routes