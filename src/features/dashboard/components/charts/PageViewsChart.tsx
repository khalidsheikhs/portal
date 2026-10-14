import DashboardChartCard from "../DashboardChartCard"

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const pageViewsData = [
  { month: "Jan", views: 18000 },
  { month: "Feb", views: 22000 },
  { month: "Mar", views: 26000 },
  { month: "Apr", views: 31000 },
  { month: "May", views: 29000 },
  { month: "Jun", views: 38000 },
]

export default function PageViewsChart() {
  return (
    <DashboardChartCard
      title="Page Views"
      description="Monthly website page views"
    >
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={pageViewsData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="views"
            stroke="#2563eb"
            fill="#2563eb"
            fillOpacity={0.15}
          />
        </AreaChart>
      </ResponsiveContainer>
    </DashboardChartCard>
  )
}