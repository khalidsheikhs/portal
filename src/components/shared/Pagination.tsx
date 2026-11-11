import {
  Pagination as ScnPagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "../ui/pagination"

function Pagination({
  path,
  pageNumber,
  pageSize,
  totalPages = 1,
  onPageChange,
}: {
  path: string
  pageNumber: number
  pageSize: number
  totalPages?: number
  onPageChange: (params: {
    pageNumber: number
    pageSize?: number
  }) => void
}) {
  return (
    <ScnPagination>
      <PaginationContent>

        <PaginationItem>
          <PaginationPrevious 
            href={pageNumber > 1 ? `/${path}?page=1&records=${pageSize}` : undefined} 
            aria-disabled={pageNumber <= 1} 
            tabIndex={pageNumber <= 1 ? -1 : undefined} 
            className={pageNumber <= 1 ? "pointer-events-none opacity-50" : undefined} 
            onClick={(e) => (e.preventDefault(), pageNumber > 1 && onPageChange({ pageNumber: 1, ...(pageSize !== 10 && { pageSize }) }))}
          />
        </PaginationItem>

        {pageNumber > 1 && (
          <PaginationItem>
            <PaginationLink
              href={`/${path}?page=${pageNumber-1}&records=${pageSize}`}
              onClick={(e) => (e.preventDefault(), onPageChange({ pageNumber: pageNumber - 1, ...(pageSize !== 10 && { pageSize }) }))}
            >
              {pageNumber - 1}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationLink isActive>
            {pageNumber}
          </PaginationLink>
        </PaginationItem>

        {pageNumber < totalPages && (
          <PaginationItem>
            <PaginationLink
              href={`/${path}?page=${pageNumber + 1}&records=${pageSize}`}
              onClick={(e) => (e.preventDefault(), onPageChange({ pageNumber: pageNumber + 1, ...(pageSize !== 10 && { pageSize }) }))}
            >
              {pageNumber + 1}
            </PaginationLink>
          </PaginationItem>
        )}

        {(pageNumber + 1) < totalPages && <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>}

        <PaginationItem>
          <PaginationNext
            href={pageNumber < totalPages ? `/${path}?page=${totalPages}&records=${pageSize}` : undefined}
            aria-disabled={pageNumber >= totalPages}
            tabIndex={pageNumber >= totalPages ? -1 : undefined}
            className={pageNumber >= totalPages ? "pointer-events-none opacity-50" : undefined}
            onClick={(e) => (e.preventDefault(), pageNumber < totalPages && onPageChange({ pageNumber: totalPages, ...(pageSize !== 10 && { pageSize }) }))}
          />
        </PaginationItem>

      </PaginationContent>
    </ScnPagination>
  )
}

export default Pagination