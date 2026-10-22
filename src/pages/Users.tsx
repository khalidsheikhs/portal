import { UsersList } from "@/features/users"
import { SelectedUser } from "@/features/users"

function Users() {
  return (
    <>
      <h2>Users Page</h2>

      <UsersList />
      <SelectedUser />
    </>
  )
}

export default Users
