import { useEffect } from "react"
import { useAppSelector, useAppDispatch } from "@/app/store/hooks"
import { fetchUsers } from "../slices"

export default function useUsers() {
  const dispatch = useAppDispatch()

  const { users, status, error } = useAppSelector(
    (state) => state.users
  )

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers())
    }
  }, [dispatch, status])

  return {
    users,
    loading: status === "loading",
    error,
  }
}