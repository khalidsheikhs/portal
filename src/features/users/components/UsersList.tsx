import { useNavigate } from "react-router-dom"
import useAppQuery from "@/hooks/useAppQuery"
import { usersQueryOptions } from "../queries/usersQueryOptions"
import { useCan, PERMISSIONS } from "@/features/permissions"
import { Button } from "@/components/index"

function UsersList() {
  const navigate = useNavigate()
  const { data: users, loading, error } = useAppQuery(usersQueryOptions)
  const canEditUser = useCan(PERMISSIONS.USERS.EDIT)

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
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <Button disabled={!canEditUser} onClick={() => navigate(`/users/update/${user.id}`)}>
                Update
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UsersList