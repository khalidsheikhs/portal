import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./assets/index.scss"
import { QueryProvider } from "./app/providers/QueryProvider.tsx"
import { AuthInitializer } from "@/features/auth"
// import { AppProvider } from "./app/providers/AppProvider.tsx"
import App from "./App.tsx"

createRoot(document.getElementById('root')!).render(
<StrictMode>
  <QueryProvider>
    <AuthInitializer />
    {/* <AppProvider> */}
      <App />
    {/* </AppProvider> */}
  </QueryProvider>
</StrictMode>,
)
