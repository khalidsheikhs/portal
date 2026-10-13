import type { DashboardChartCardProps } from "../types"

export default function DashboardChartCard({
  title,
  description,
  children,
}: DashboardChartCardProps) {
  return (
    <div className="min-w-0 rounded-lg border bg-white p-5">
      {title && (
        <h3 className="text-lg font-semibold">
          {title}
        </h3>
      )}

      {description && (
        <p className="mb-5 text-sm text-gray-500">
          {description}
        </p>
      )}

      {children}
    </div>
  )
}