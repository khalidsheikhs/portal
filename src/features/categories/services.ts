import { apiClient } from "@/lib/apiClient"
import type { Category } from "./types"

export const getCategories = async (): Promise<Category[]> => {
  const response = await apiClient<Category[]>(
    "/wp/v2/categories",
    {
      method: "GET",
    }
  )

  return response
}