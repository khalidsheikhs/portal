import { env } from "@/config/env"
import { useToken } from "@/features/auth/"

// Services that don't need headers
export function apiClient<T>(
  endpoint: string,
  options?: RequestInit,
  returnResponse?: false,
): Promise<T>

// Services that need headers
export function apiClient<T>(
  endpoint: string,
  options: RequestInit | undefined,
  returnResponse: true,
): Promise<{ data: T; headers: Headers }>

export async function apiClient<T>(
  endpoint: string,
  options: RequestInit = {},
  returnResponse = false,
): Promise<T | { data: T; headers: Headers }> {
  const headers = new Headers(options.headers)

  headers.set("Content-Type", "application/json")

  const token = useToken.getState().get()

  if (token)
    headers.set("X-WP-Nonce", token)

  const response = await fetch(
    `${env.API_BASE_URL}${endpoint}`,
    {
      ...options,
      credentials: "include",
      headers,
    }
  )

  if (!response.ok) {
    const error = await response.json().catch(() => null)

    // Handle invalid WordPress nonce
    if (error?.code === "vendor_auth_invalid_nonce") {
      // window.location.replace("/login")
      throw new Error("Session expired. Please log in again.")
    }

    throw new Error(
      error?.message || `Request failed (${response.status})`
    )
  }

  const data = await response.json() as T

  if (returnResponse)
    return {
      data,
      headers: response.headers,
    }

  return data
}