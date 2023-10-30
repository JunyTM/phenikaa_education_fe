import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { homeLoader } from "../views/Home";
import Auth from "../views/Auth";
import Exam from "../views/Exam";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // loader: homeLoader,
  },
  { path: "auth", element: <Auth /> },
  { path: "exam", element: <Exam /> },
  { path: "*", element: <div>Not Found</div> },
]);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
