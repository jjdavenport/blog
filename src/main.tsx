import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { MainPage } from "./pages/content.tsx";

const router = createBrowserRouter([
  {
    path: "/blog/",
    element: <App />,
    children: [
      {
        path: "",
        index: true,
        element: <MainPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
