import { lazy } from "react"
export const UserGrowthChart = lazy(() => import("./components/charts/UserGrowthChart"))
export const PostsPublishedChart = lazy(() => import("./components/charts/PostsPublishedChart"))
export const TrafficSourcesChart = lazy(() => import("./components/charts/TrafficSourcesChart"))
export const PageViewsChart = lazy(() => import("./components/charts/PageViewsChart"))