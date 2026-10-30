import { Button } from "@/components/index"
import useUsers from "../hooks"
import { useSelectedUser } from "../stores"

function UsersList() {
  const { users, loading, error } = useUsers()
  const selectedUser = useSelectedUser((state) => state.user)
  const selectUser = useSelectedUser((state) => state.selectUser)

  if (loading) {
    return <p>Loading users...</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  if (!users?.length) {
    return <p>No users found.</p>
  }

  return (
    <table width="100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
          {users.map((user) => (
          <tr key={user.id} className={user.id === selectedUser?.id ? 'active' : '' }>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <Button onClick={() => selectUser(user)}>
                View User
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UsersList