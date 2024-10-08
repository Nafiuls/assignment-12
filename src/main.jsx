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
import Employee from "./Forms/Employee";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./Forms/Login";
import AddAsset from "./hrpages/AddAsset";
import AddEmployee from "./hrpages/AddEmployee";
import AssetList from "./hrpages/AssetList";
import Request from "./hrpages/Request";
import EmployeeList from "./hrpages/EmployeeList";
import UpdateAsset from "./Forms/UpdateAsset";
import Profile from "./Pages/Profile";
import MyAsset from "./employeepages/MyAsset";
import MyTeam from "./employeepages/MyTeam";
import RequestAsset from "./employeepages/RequestAsset";


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
      },
      {
        path: '/employeeForm',
        element: <Employee />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      // hr manager related path
      {
        path: '/addAsset',
        element: <AddAsset />
      },
      {
        path: 'addEmployee',
        element: <AddEmployee />
      },
      {
        path: 'assetList',
        element: <AssetList />
      },
      {
        path: 'requests',
        element: <Request />
      },
      {
        path: 'employeeList',
        element: <EmployeeList />
      },
      {
        path: 'updateForm/:id',
        element: <UpdateAsset />
      },
      // Employee related routes
      {
        path: '/myAsset',
        element: <MyAsset />
      },
      {
        path: '/myTeam',
        element: <MyTeam />
      },
      {
        path: '/requestAsset',
        element: <RequestAsset />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        // transition={Bounce}
        />
        <ChakraProvider>
          <RouterProvider router={router}>
            <Root />
          </RouterProvider>
        </ChakraProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

