import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "@/pages/Home";

export const paths = [
  {
    path: "/",
    element: <Home />,
  },
];

const routes = createBrowserRouter(paths);

export function Routes() {
  return <RouterProvider router={routes} />;
}
