import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Layout from "./Layout";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";
import Assessments from "./components/Assessments";
import Forum from "./components/Forum";
import Lessons from "./components/Lessons";
import Materials from "./components/Materials";
import Schedule from "./components/Schedule";
import Settings from "./components/Settings";
import Bar from "./components/common/Bar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ProtectedRoute from "./ProtectedRoute";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/dashboard",
          element: <ProtectedRoute element={<Dashboard />} />,
        },
        {
          path: "/assessments",
          element: <ProtectedRoute element={<Assessments />} />,
        },
        {
          path: "/forum",
          element: <ProtectedRoute element={<Forum />} />,
        },
        {
          path: "/lessons",
          element: <ProtectedRoute element={<Lessons />} />,
        },
        {
          path: "/materials",
          element: <ProtectedRoute element={<Materials />} />,
        },
        {
          path: "/schedule",
          element: <ProtectedRoute element={<Schedule />} />,
        },
        {
          path: "/settings",
          element: <ProtectedRoute element={<Settings />} />,
        },
        {
          path: "/",
          element: <Navigate to="/login" />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <>
      <ToastContainer position="top-right" transition={Slide} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
