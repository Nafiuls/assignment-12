import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import HrForm from "./Forms/HrForm";
import { ChakraProvider } from '@chakra-ui/react'
import Root from "../Root";
import AuthProvider from "./AuthProvider/AuthProvider";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()




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
    <QueryClientProvider client={queryClient}>
      <div className="max-w-6xl mx-auto">
        <AuthProvider>
          <ChakraProvider>
            <RouterProvider router={router}>
              <Root />
            </RouterProvider>
          </ChakraProvider>
        </AuthProvider>
      </div>
    </QueryClientProvider>
  </React.StrictMode>
);

