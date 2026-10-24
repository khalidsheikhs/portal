import type { LoaderFunctionArgs } from "react-router-dom"
import store from "@/app/store/store"
import { fetchUsers } from "./slices"

export async function usersLoader(_args: LoaderFunctionArgs) {
  const state = store.getState()

  // Reuse users already loaded in Redux.
  if (state.users.status === "succeeded") {
    return null
  }

  // Wait for the API request to finish before rendering the route.
  await store.dispatch(fetchUsers()).unwrap()

  return null
}