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
}: TableProps<T>) {
  const totalColumns = columns.length + (actions ? 1 : 0)

  return (
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
            <TableCell
              colSpan={totalColumns}
              className="h-24 text-center"
            >
              Loading...
            </TableCell>
          </TableRow>
        ) : rows.length === 0 ? (
          <TableRow>
            <TableCell
              colSpan={totalColumns}
              className="h-24 text-center"
            >
              {emptyMessage}
            </TableCell>
          </TableRow>
        ) : (
          rows.map((row) => (
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
          ))
        )}
      </TableBody>

      {showFooter && (
        <TableFooter>
          <TableRow>
            <TableCell
              colSpan={totalColumns}
              className="text-right"
            >
              Total: {rows.length}
            </TableCell>
          </TableRow>
        </TableFooter>
      )}
    </ScnTable>
  )
}

export default Table