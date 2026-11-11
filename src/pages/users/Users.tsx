import { useSearchParams } from "react-router-dom"
import useAppQuery from "@/hooks/useAppQuery"
import { usersQueryOptions, UsersList, type User } from "@/features/users"
import { Pagination, type TableColumn } from "@/components"
import { getPagination } from "@/utils"
import {  } from "@/components"

const userColumns: TableColumn<User>[] = [
  {
    id: "avatar",
    header: "Avatar",
    cell: (user: User) => user.avatar_urls?.["48"] && (
      <img src={user.avatar_urls["48"]} alt={user.name} className="h-10 w-10 rounded-full object-cover" />
    )
  },
  {
    id: "name",
    header: "Name",
    cell: (user: User) => (
      <a href={user.link} target="_blank" rel="noopener noreferrer">
        {user.name}
      </a>
    )
  },
  {
    id: "email",
    header: "Email",
    cell: (user: User) => user.email
  },
  {
    id: "roles",
    header: "Roles",
    cell: (user: User) => user.roles && user.roles.join(", ")
  },
]

function Users() {
  const [ searchParams, setSearchParams ] = useSearchParams()

  const { pageNumber, PageSize } = getPagination(searchParams)

  const { data, loading, error } = useAppQuery(
    usersQueryOptions({ page: pageNumber, size: PageSize })
  )

  const handlePageChange = ({
    pageNumber,
    pageSize,
  }: {
    pageNumber: number
    pageSize?: number
  }) => {
    setSearchParams({
      ...(pageNumber !== 1 && { page: String(pageNumber) }),
      ...(pageSize !== undefined && { size: String(pageSize) }),
    })
  }

  return (
    <>
      <h2>Users Page</h2>

      {data && <UsersList
        rows={data.users}
        columns={userColumns}
        loading={loading}
        error={error}
      />}

      <Pagination
        path="users"
        pageNumber={pageNumber}
        pageSize={PageSize}
        totalPages={data?.totalPages}
        onPageChange={handlePageChange}
        // setPage={(num)=> searchParams.set("page", num)}
      />

      {/* <SelectedUser /> */}

    </>
  )
}

export default Users