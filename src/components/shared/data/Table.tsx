import { useRef } from "react"
import { useVirtualizer } from "@tanstack/react-virtual"

import {
  Table as ScnTable,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "../../ui/table"

import type { TableProps } from "./types"

function Table<T>({
  title,
  columns,
  rows,
  getRowId,
  actions,
  actionsHeader = "Actions",
  isLoading = false,
  emptyMessage = "No results found.",
  className,
  showFooter = false,
  virtualized = rows.length > 20,
}: TableProps<T>) {
  const parentRef = useRef<HTMLDivElement>(null)

  const totalColumns = columns.length + (actions ? 1 : 0)

  const rowVirtualizer = useVirtualizer({
    count: virtualized && !isLoading ? rows.length : 0,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 57,
    overscan: 3,
  })

  const virtualRows = rowVirtualizer.getVirtualItems()

  const paddingTop = virtualRows.length > 0
    ? virtualRows[0].start
    : 0

  const paddingBottom = virtualRows.length > 0
    ? rowVirtualizer.getTotalSize() -
      virtualRows[virtualRows.length - 1].end
    : 0

  const renderRow = (row: T) => (
    <TableRow key={getRowId(row)}>
      {columns.map((column) => (
        <TableCell
          key={column.id}
          className={column.cellClassName}
        >
          {column.cell(row)}
        </TableCell>
      ))}

      {actions && (
        <TableCell className="text-right">
          {actions(row)}
        </TableCell>
      )}
    </TableRow>
  )

  const table = (
    <ScnTable className={className}>
      {title && <TableCaption>{title}</TableCaption>}

      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHead
              key={column.id}
              className={column.headerClassName}
            >
              {column.header}
            </TableHead>
          ))}

          {actions && (
            <TableHead className="text-right">
              {actionsHeader}
            </TableHead>
          )}
        </TableRow>
      </TableHeader>

      <TableBody>
        {isLoading ? (
          <TableRow>
            <TableCell colSpan={totalColumns} className="h-24 text-center">
              Loading...
            </TableCell>
          </TableRow>
        ) : rows.length === 0 ? (
          <TableRow>
            <TableCell colSpan={totalColumns} className="h-24 text-center">
              {emptyMessage}
            </TableCell>
          </TableRow>
        ) : virtualized ? (
          <>
            {paddingTop > 0 && (
              <TableRow>
                <TableCell
                  colSpan={totalColumns}
                  className="p-0 border-0"
                  style={{ height: `${paddingTop}px` }}
                />
              </TableRow>
            )}

            {virtualRows.map((virtualRow) =>
              renderRow(rows[virtualRow.index])
            )}

            {paddingBottom > 0 && (
              <TableRow>
                <TableCell
                  colSpan={totalColumns}
                  className="p-0 border-0"
                  style={{ height: `${paddingBottom}px` }}
                />
              </TableRow>
            )}
          </>
        ) : (
          rows.map(renderRow)
        )}
      </TableBody>

      {showFooter && (
        <TableFooter>
          <TableRow>
            <TableCell colSpan={totalColumns} className="text-right">
              Total: {rows.length}
            </TableCell>
          </TableRow>
        </TableFooter>
      )}
    </ScnTable>
  )

  return virtualized ? (
    <div ref={parentRef} className="max-h-[calc(100vh-64px-48px-36px-16px-3rem-2.5rem)] overflow-auto">
      {/* cavas viewport height - header height - footer height - pagination height - page title height - vertical paddings */}
      {table}
    </div>
  ) : (
    table
  )
}

export default Table