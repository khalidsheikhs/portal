import type { User } from "./types"

export async function getUsers(): Promise<User[]> {
  return new Promise((resolve) => {
    console.log("Fetching users...")
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "John",
          email: "john@example.com",
        },
        {
          id: 2,
          name: "Sarah",
          email: "sarah@example.com",
        },
      ])
    }, 2500)
  })
}