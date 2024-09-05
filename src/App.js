import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";
import Assessments from "./components/Assessments";
import Forum from "./components/Forum";
import Lessons from "./components/Lessons";
import Materials from "./components/Materials";
import Schedule from "./components/Schedule";
import Settings from "./components/Settings";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/assessments",
          element: <Assessments />,
        },
        {
          path: "/forum",
          element: <Forum />,
        },
        {
          path: "/lessons",
          element: <Lessons />,
        },
        {
          path: "/materials",
          element: <Materials />,
        },
        {
          path: "/schedule",
          element: <Schedule />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
