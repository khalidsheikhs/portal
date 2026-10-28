
import { env } from "@/config/env"
import { csrfNonceSession } from "@/features/auth/"

export async function apiClient<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const headers = new Headers(options.headers)
  headers.set("Content-Type", "application/json")

  const csrfNonce = csrfNonceSession.get()

  if (csrfNonce) {
    headers.set("X-WP-Nonce", csrfNonce)
  }

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
      window.location.replace("/login")
      throw new Error("Session expired. Please log in again.")
    }

    throw new Error(
      error?.message || `Request failed (${response.status})`
    )
  }

  return response.json() as Promise<T>
}