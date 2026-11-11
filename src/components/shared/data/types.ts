import type { ReactNode } from "react"

export interface TableColumn<T> {
  id: string
  header: ReactNode
  cell: (row: T) => ReactNode
  headerClassName?: string
  cellClassName?: string
}

export interface TableProps<T> {
  title?: string
  columns: TableColumn<T>[]
  rows: T[]
  getRowId: (row: T) => string | number
  actions?: (row: T) => ReactNode
  actionsHeader?: ReactNode
  isLoading?: boolean
  emptyMessage?: string
  className?: string
  showFooter?: boolean
}