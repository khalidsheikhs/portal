import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import useAppQuery from "@/hooks/useAppQuery"
import { usersQueryOptions, UsersList, usersColumns, usePagination, deleteUser } from "@/features/users"
import { Pagination, Dropdown } from "@/components"
import { getPagination } from "@/utils"
import type { BaseUser as User } from "@/types/user"

function Users() {
  const [deletingUserId, setDeletingUserId] = useState<User["id"] | null>(null)

  const pageSize = usePagination((state) => state.pageSize)

  const setPageSize = usePagination((state) => state.setPageSize)

  const [searchParams] = useSearchParams()

  const { pageNumber } = getPagination(searchParams)

  const { data, loading, error } = useAppQuery(
    usersQueryOptions({ page: pageNumber, size: pageSize })
  )

  const queryClient = useQueryClient()

  const deleteMutation = useMutation({
    mutationFn: deleteUser,

    onSuccess: (response) => {
      if (response.deleted) {
        queryClient.invalidateQueries({
          queryKey: ["users"],
        })

        console.log(
          `User ${response.previous.username} deleted successfully`
        )
      }
    },
  })

  async function handleDelete(id: User["id"]) {
    setDeletingUserId(id)

    try {
      await deleteMutation.mutateAsync(id)
    } finally {
      setDeletingUserId(null)
    }
  }

  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <h2>Users Page</h2>

        <Dropdown
          value={String(pageSize)}
          onValueChange={(value) => setPageSize(Number(value))}
          placeholder="Select page size"
          options={[
            { label: "10", value: "10" },
            { label: "20", value: "20" },
            { label: "30", value: "30" },
            { label: "50", value: "50" },
            { label: "100", value: "100" },
          ]}
          contentClassName="w-[100px]"
          triggerClassName="w-[100px]"
        />
      </div>

      <UsersList
        rows={data?.users ?? []}
        columns={usersColumns}
        loading={loading}
        error={error}
        handleDelete={handleDelete}
        isDeleting={deleteMutation.isPending}
        deletingUserId={deletingUserId}
      />

      {data && data.totalPages > 1 && (<Pagination
        pageNumber={pageNumber}
        totalPages={data.totalPages}
      />)}

      {/* <SelectedUser /> */}

    </>
  )
}

export default Users