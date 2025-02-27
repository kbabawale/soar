import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import HomeLayout from "./components/HomeLayout.component";
import NotFound from "./components/NotFound.component";
import React from "react";

const _Settings = React.lazy(() => import("./pages/Settings"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/settings",
        element: (
          <React.Suspense
            fallback={<span className="text-sm text-c-light">Loading...</span>}
          >
            <_Settings />
          </React.Suspense>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },

  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
