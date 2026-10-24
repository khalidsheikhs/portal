import { Suspense } from "react"
import {
  UserGrowthChart,
  PostsPublishedChart,
  TrafficSourcesChart,
  PageViewsChart,
} from "@/features/dashboard"

export default function Dashboard() {
  return (
    <>
      <h2 className="mb-6 text-2xl font-semibold">
        Dashboard
      </h2>

      <Suspense
        fallback={
          <div className="flex h-[300px] items-center justify-center text-sm text-gray-500">
            Loading charts...
          </div>
        }
      >
        <div className="grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-2">
          <UserGrowthChart />
          <PostsPublishedChart />
          <TrafficSourcesChart />
          <PageViewsChart />
        </div>
      </Suspense>
    </>
  )
}