import type { Category } from "./types"

export async function getCategories(): Promise<Category[]> {
  console.log("Fetching categories...")
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Technology" },
        { id: 2, name: "Business" },
        { id: 3, name: "Sports" },
      ])
    }, 2500)
  })
}