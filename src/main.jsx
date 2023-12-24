import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routers/Router";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from "./providers/AuthProvider";
const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </QueryClientProvider>
);