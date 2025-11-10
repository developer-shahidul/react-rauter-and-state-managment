import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/layouts/Main.jsx";
import Home from "./components/Home/Home.jsx";
import "./index.css";
import App from "./App.jsx";
import Login from "./components/login/Login.jsx";
import Community from "./components/community/Community.jsx";

// Router config
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/login",
        element: <Login></Login>,
      },
      { path: "/community", element: <Community></Community> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
