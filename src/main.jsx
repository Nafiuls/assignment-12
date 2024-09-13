import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "../Root";
import Home from "./Pages/Home";
import HrForm from "./Forms/HrForm";
import { ChakraProvider } from '@chakra-ui/react'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: '/hrForm',
        element: <HrForm />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-6xl mx-auto">
      <ChakraProvider>
        <RouterProvider router={router}>
          <Root />
        </RouterProvider>
      </ChakraProvider>
    </div>
  </React.StrictMode>
);

