import { UserGrowthChart, PostsPublishedChart, TrafficSourcesChart, PageViewsChart } from "@/features/dashboard"

export default function Dashboard() {
  return (
    <>
      <h2 className="mb-6 text-2xl font-semibold">Dashboard</h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 min-w-0">

        {/* User Growth */}
        <UserGrowthChart />

        {/* Posts Published */}
        <PostsPublishedChart />

        {/* Traffic Sources */}
        <TrafficSourcesChart />

        {/* Page Views */}
        <PageViewsChart />

      </div>
    </>
  )
}