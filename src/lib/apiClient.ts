import { env } from "@/config/env"

export async function apiClient<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(
    `${env.API_BASE_URL}${endpoint}`,
    {
      ...options,
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
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
