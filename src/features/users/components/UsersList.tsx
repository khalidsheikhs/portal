// import { useNavigate } from "react-router-dom"
import useAppQuery from "@/hooks/useAppQuery"
import { usersQueryOptions } from "../queries/usersQueryOptions"
// import { useCan, PERMISSIONS } from "@/features/permissions"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components"

function UsersList() {
  //const navigate = useNavigate()
  const { data: users, loading, error } = useAppQuery(usersQueryOptions)
  // const canEditUser = useCan(PERMISSIONS.USERS.EDIT)

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
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Roles</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.description}</TableCell>
            <TableCell></TableCell>
            <TableCell className="text-right"></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default UsersList