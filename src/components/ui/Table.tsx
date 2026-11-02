import type { ReactNode } from "react"

type TableProps<T extends object> = {
  data: T[]
  keys?: (keyof T)[]
  limit?: number

  renderActions?: (row: T) => ReactNode
  actionsTitle?: string

  className?: string
  wrapperClassName?: string
  headerClassName?: string
  cellClassName?: string
  rowClassName?: string

  emptyMessage?: string
}

function formatHeader(key: string) {
  return key
    .replace(/_/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\b\w/g, (char) => char.toUpperCase())
}

function formatValue(value: unknown): ReactNode {
  if (value === null || value === undefined || value === "") {
    return "—"
  }

  if (typeof value === "boolean") {
    return value ? "Yes" : "No"
  }

  if (typeof value === "object") {
    return JSON.stringify(value)
  }

  return String(value)
}

function Table<T extends object>({
  data,
  keys,
  limit,
  renderActions,
  actionsTitle = "Actions",
  className = "",
  wrapperClassName = "",
  headerClassName = "",
  cellClassName = "",
  rowClassName = "",
  emptyMessage = "No records found.",
}: TableProps<T>) {
  // Get columns from the first data object if keys are not provided
  const allKeys = (
    keys ?? (data.length > 0 ? Object.keys(data[0]) : [])
  ) as (keyof T)[]

  // Apply column limit
  const columns =
    limit !== undefined
      ? allKeys.slice(0, Math.max(0, limit))
      : allKeys

  return (
    <div className={`w-full overflow-x-auto rounded-lg border border-slate-200 ${wrapperClassName}`}>
      <table
        className={`w-full border-collapse text-left text-sm ${className}`}
      >
        <thead className="bg-slate-100">
          <tr>
            {columns.map((key) => (
              <th
                key={String(key)}
                scope="col"
                className={`whitespace-nowrap px-4 py-3 font-semibold text-slate-700 ${headerClassName}`}
              >
                {formatHeader(String(key))}
              </th>
            ))}

            {renderActions && (
              <th
                scope="col"
                className={`whitespace-nowrap px-4 py-3 font-semibold text-slate-700 ${headerClassName}`}
              >
                {actionsTitle}
              </th>
            )}
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-200 bg-white">
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`hover:bg-slate-50 ${rowClassName}`}
              >
                {columns.map((key) => (
                  <td
                    key={String(key)}
                    className={`px-4 py-3 text-slate-600 ${cellClassName}`}
                  >
                    {formatValue(row[key])}
                  </td>
                ))}

                {renderActions && (
                  <td
                    className={`whitespace-nowrap px-4 py-3 ${cellClassName}`}
                  >
                    {renderActions(row)}
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length + (renderActions ? 1 : 0) || 1}
                className="px-4 py-8 text-center text-slate-500"
              >
                {emptyMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Table