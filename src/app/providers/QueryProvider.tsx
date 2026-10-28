import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

export const queryClient = new QueryClient()

type QueryProviderProps = {
  children: React.ReactNode
}

export function QueryProvider({ children }: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  )
}