import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./assets/index.scss"
import { QueryProvider } from "./app/providers/QueryProvider.tsx"
import { Provider } from "react-redux"
import store from "./app/store/store"
// import { AppProvider } from "./app/providers/AppProvider.tsx"
import App from "./App.tsx"

createRoot(document.getElementById('root')!).render(
<StrictMode>
  <QueryProvider>
    <Provider store={store}>
      {/* <AppProvider> */}
        <App />
      {/* </AppProvider> */}
    </Provider>
  </QueryProvider>
</StrictMode>,
)
