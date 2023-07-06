import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Cart } from "@/pages/Cart";
import { Home } from "@/pages/Home";

export const paths = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
];

const routes = createBrowserRouter(paths);

export function Routes() {
  return <RouterProvider router={routes} />;
}
