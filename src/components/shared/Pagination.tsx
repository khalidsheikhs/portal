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
  totalPages,
  onPageChange,
}: {
  path?: string
  pageNumber: number
  totalPages: number
  onPageChange?: (pageNumber: number) => void
}) {
  return (
    <ScnPagination>
      <PaginationContent>

        <PaginationItem>
          <PaginationPrevious 
            href={
              pageNumber > 1
                ? `${path ? `/${path}` : ""}?page=${pageNumber - 1}`
                : undefined
            }
            aria-disabled={pageNumber <= 1} 
            tabIndex={pageNumber <= 1 ? -1 : undefined} 
            className={pageNumber <= 1 ? "pointer-events-none opacity-50" : undefined} 
            // onClick={(e) => (e.preventDefault(), pageNumber > 1 && onPageChange(pageNumber - 1))}
            {...(onPageChange && {
              onClick: (e) => {
                e.preventDefault()
                if (pageNumber > 1) onPageChange(pageNumber - 1)
              },
            })}
          />
        </PaginationItem>

        {pageNumber > 1 && (
          <PaginationItem>
            <PaginationLink
              href={`${path ? `/${path}` : ""}?page=${pageNumber - 1}`}
              // onClick={(e) => (e.preventDefault(), onPageChange(pageNumber - 1))}
              {...(onPageChange && {
                onClick: (e) => {
                  e.preventDefault()
                  onPageChange(pageNumber - 1)
                },
              })}
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
              href={`${path ? `/${path}` : ""}?page=${pageNumber + 1}`}
              // onClick={(e) => (e.preventDefault(), onPageChange(pageNumber + 1))}
              {...(onPageChange && {
                onClick: (e) => {
                  e.preventDefault()
                  onPageChange(pageNumber + 1)
                },
              })}
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
            href={
              pageNumber < totalPages
                ? `${path ? `/${path}` : ""}?page=${pageNumber + 1}`
                : undefined
            }
            aria-disabled={pageNumber >= totalPages}
            tabIndex={pageNumber >= totalPages ? -1 : undefined}
            className={pageNumber >= totalPages ? "pointer-events-none opacity-50" : undefined}
            // onClick={(e) => (e.preventDefault(), pageNumber < totalPages && onPageChange(pageNumber + 1))}
            {...(onPageChange && {
              onClick: (e) => {
                e.preventDefault()
                if (pageNumber < totalPages) onPageChange(pageNumber + 1)
              },
            })}
          />
        </PaginationItem>

      </PaginationContent>
    </ScnPagination>
  )
}

export default Pagination