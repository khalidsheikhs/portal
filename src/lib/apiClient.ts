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
      credentials: 'include',
      headers,
    }
  )

  if (!response.ok) {
    const error = await response.json().catch(() => null)

    throw new Error(
      error?.message || `Request failed (${response.status})`
    )
  }

  return response.json() as Promise<T>
}
