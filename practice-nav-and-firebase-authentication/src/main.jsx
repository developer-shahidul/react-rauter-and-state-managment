import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import Main from "./component/main/Main.jsx";
import Home from "./component/Home/Home.jsx";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import About from "./component/About/About.jsx";
import Contract from "./component/contract/Contract.jsx";
import Block from "./component/block/Block.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/about", element: <About></About> },
      { path: "/contract", element: <Contract></Contract> },
      { path: "/block", element: <Block></Block> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
