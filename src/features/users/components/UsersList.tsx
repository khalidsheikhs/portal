import { Button } from "@/components/index"
import { useAppDispatch } from "@/app/store/hooks"
import { selectUser } from "../slices"
import useUsers from "./../hooks/useUsers"
import useSelectedUser from "./../hooks/useSelectedUser"

function UsersList() {
  const dispatch = useAppDispatch()
  const { users, loading, error } = useUsers()
  const { selectedUser } = useSelectedUser()

  if (loading) {
    return <p>Loading users...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
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
          <tr key={user.id} className={user.id === selectedUser ? 'active' : '' }>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <Button onClick={() => dispatch(selectUser(user.id))}>
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