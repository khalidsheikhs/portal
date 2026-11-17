import { useState } from "react"
import { Link } from "react-router-dom"
import { Pencil, Trash2 } from "lucide-react"
import { useCan, PERMISSIONS } from "@/features/permissions"
import { DataTable, AlertDialog, type TableColumn } from "@/components"
import type { User } from "../types"

function UsersList({
  rows,
  columns,
  loading,
  error,
  handleDelete,
  isDeleting,
  deletingUserId,
}: {
  rows: User[]
  columns: TableColumn<User>[]
  loading?: boolean
  error?: Error | null
  handleDelete: (id: User["id"]) => Promise<void>
  isDeleting?: boolean
  deletingUserId?: User["id"] | null
}) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  const canEditUser = useCan(PERMISSIONS.USERS.EDIT)

  const canDeleteUser = useCan(PERMISSIONS.USERS.DELETE)

  const showActions = canDeleteUser || canEditUser

  async function handleConfirm() {
    if (!selectedUser || !canDeleteUser) return

    await handleDelete(selectedUser.id)
    setSelectedUser(null)
  }

  if (error)
    return <p>Error: {error.message}</p>

  return (
    <>
      <DataTable
        columns={columns}
        rows={rows}
        getRowId={(user) => user.id}
        isLoading={loading}
        emptyMessage="No users found."
        getRowClassName={user =>
          deletingUserId === user.id
            ? "bg-muted opacity-50 pointer-events-none"
            : ""
        }
        actions={
          showActions
          ? (user) => (
            <div className="flex justify-end gap-3">
              {canEditUser && <Link
                to={`/users/update/${user.id}`}
                className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
                title="Edit user"
              >
                <Pencil size={16} />
              </Link>}

              {canDeleteUser && <button
                type="button"
                disabled={isDeleting}
                onClick={() => setSelectedUser(user)}
                className="flex items-center gap-1 text-sm text-red-600 hover:text-red-800 disabled:opacity-50"
                title="Remove user"
              >
                <Trash2 size={16} />
              </button>}
            </div>
          )
          : undefined
        }
      />
      <AlertDialog
        open={!!selectedUser}
        onOpenChange={(open) => {
          if (!open) setSelectedUser(null)
        }}
        title="Are you absolutely sure?"
        description={`This action cannot be undone. This will permanently delete ${selectedUser?.name ?? "this user"}.`}
        confirmButtonLabel="Delete"
        handleConfirm={handleConfirm}
        confirmButtonDisabled={isDeleting}
      />
    </>
  )
}

export default UsersList