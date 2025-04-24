import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/layout/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router";
import { router } from "./app/router/Routes";
import { store, StoreContext } from "./lib/stores/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreContext.Provider value={store}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ToastContainer
          position="bottom-right"
          hideProgressBar
          theme="colored"
        />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StoreContext.Provider>
  </StrictMode>
);
