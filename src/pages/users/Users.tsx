import { useSearchParams } from "react-router-dom"
import useAppQuery from "@/hooks/useAppQuery"
import { usersQueryOptions, UsersList, usersColumns, usePagination } from "@/features/users"
import { Pagination } from "@/components"
import { getPagination } from "@/utils"

function Users() {
  const pageSize = usePagination((state) => state.pageSize)

  const setPageSize = usePagination((state) => state.setPageSize)

  const [searchParams, setSearchParams] = useSearchParams()

  const { pageNumber } = getPagination(searchParams)

  const { data, loading, error } = useAppQuery(
    usersQueryOptions({ page: pageNumber, size: pageSize })
  )

  const handlePageChange = (nextPage: number) =>
    setSearchParams((currentParams) => {
      const params = new URLSearchParams(currentParams)

      if (nextPage === 1)
        params.delete("page")
      else
        params.set("page", String(nextPage))

      return params
    })

  return (
    <>
      <h2>Users Page</h2>

<select
  value={pageSize}
  onChange={(e) => setPageSize(Number(e.target.value))}
  className="border rounded-md px-3 py-2"
>
  <option value={10}>10</option>
  <option value={20}>20</option>
  <option value={30}>30</option>
</select>

      <UsersList
        rows={data?.users ?? []}
        columns={usersColumns}
        loading={loading}
        error={error}
        showActions
      />

      {data && data.totalPages > 1 && (<Pagination
        path="users"
        pageNumber={pageNumber}
        totalPages={data.totalPages}
        onPageChange={handlePageChange} // Removing onPageChange prop will make the page load on every page change by the pagination
      />)}

      {/* <SelectedUser /> */}

    </>
  )
}

export default Users