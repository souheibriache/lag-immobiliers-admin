import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import {} from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store.ts";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider attribute="class" defaultTheme="system">
      <PersistGate persistor={persistor} loading={null}>
        <React.StrictMode>
          <BrowserRouter>
            <QueryClientProvider client={queryClient}>
              <App />
              <Toaster visibleToasts={5} position="top-right" richColors />
            </QueryClientProvider>
          </BrowserRouter>
        </React.StrictMode>
      </PersistGate>
    </ThemeProvider>
  </Provider>
);
