import { createRoot } from "react-dom/client";
// css links 
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// componenets
import Home from "./screens/Home";
import Layout from "./Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(

  <RouterProvider router={router} />
);
