import { useNavigate } from "react-router-dom"
import useAppQuery from "@/hooks/useAppQuery"
import { usersQueryOptions } from "../queries/usersQueryOptions"
import { useCan, PERMISSIONS } from "@/features/permissions"
import { Button, Table } from "@/components"

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
    <Table
      data={users}
      keys={["name", "url", "description"]}
      renderActions={(user) => (
        <div className="flex items-center gap-2">
          <Button
            disabled={!canEditUser}
            onClick={() => navigate(`/users/update/${user.id}`)}
            className="px-3 py-1"
          >
            Update
          </Button>
        </div>
      )}
    />
  )
}

export default UsersList