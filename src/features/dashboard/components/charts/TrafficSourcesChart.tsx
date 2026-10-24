import DashboardChartCard from "../DashboardChartCard"

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const trafficData = [
  { name: "Google", value: 45 },
  { name: "Direct", value: 25 },
  { name: "Social", value: 20 },
  { name: "Referral", value: 10 },
]

const COLORS = ["#2563eb", "#16a34a", "#f59e0b", "#9333ea"]

export default function TrafficSourcesChart() {
  return (
      <DashboardChartCard
        title="Traffic Sources"
        description="Where your visitors come from"
      >
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                data={trafficData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
                >
                {trafficData.map((entry, index) => (
                    <Cell
                    key={entry.name}
                    fill={COLORS[index % COLORS.length]}
                    />
                ))}
                </Pie>

                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    </DashboardChartCard>
  )
}