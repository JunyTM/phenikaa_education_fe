import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { homeLoader } from "../views/Home";
import Auth from "../views/Auth";
import Login from "../components/layouts/Login";
import Regist from "../components/layouts/Regist";
import Exam from "../views/Exam";
import NotFound from "../views/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // loader: homeLoader,
  },
  {
    path: "auth",
    element: <Auth />,
  },
  { path: "exam", element: <Exam /> },
  { path: "login", element: <Login /> },
  { path: "register", element: <Regist /> },
  { path: "404", element: <NotFound /> },
]);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
