import { Link } from "react-router-dom"
import { Pencil, Trash2 } from "lucide-react"
import { useCan, PERMISSIONS } from "@/features/permissions"
import { DataTable, type TableColumn } from "@/components"
import type { User } from "../types"

function UsersList({
  rows,
  columns,
  loading,
  error,
  showActions = false,
}: {
  rows: User[]
  columns: TableColumn<User>[]
  loading: boolean
  error: Error | null
  showActions?: boolean
}) {
  const canEditUser = useCan(PERMISSIONS.USERS.EDIT)

  const handleDelete = (id: User["id"]): void => {
    console.log(`Delete user ${id}`)
  }

  if (error)
    return <p>Error: {error.message}</p>

  return (
    <DataTable
      columns={columns}
      rows={rows}
      getRowId={(user) => user.id}
      isLoading={loading}
      emptyMessage="No users found."
      actions={
        showActions
        ? (user) => (
          <div className="flex justify-end gap-3">
            <Link
              to={`/users/update/${user.id}`}
              className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
              aria-disabled={!canEditUser}
              onClick={(e) => {
                if (!canEditUser) e.preventDefault()
              }}
              title="Edit user"
            >
              <Pencil size={16} />
            </Link>

            <button
              type="button"
              disabled={!canEditUser}
              onClick={() => handleDelete(user.id)}
              className="flex items-center gap-1 text-sm text-red-600 hover:text-red-800 disabled:opacity-50"
              title="Remove user"
            >
              <Trash2 size={16} />
            </button>
          </div>
        )
        : undefined
      }
    />
  )
}

export default UsersList