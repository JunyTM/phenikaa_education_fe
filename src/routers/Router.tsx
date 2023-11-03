import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../views/Home";
import Auth from "../views/Auth";
import Login from "../components/layouts/Login";
import Regist from "../components/layouts/Regist";
import ExamList from "../views/ExamList";
import QuestionGroup from "../views/QuestionGroup";
import NotFound from "../views/NotFound";
import Practice from "../views/Practice";
import Detail, {} from "../views/Detail";
import Result from "../views/Result";

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
  { path: "result", element: <Result /> },

  { path: "exam", element: <ExamList /> },
  { path: "question", element: <QuestionGroup /> },
  { path: "detail", element: <Practice /> },
  { path: "login", element: <Login /> },
  { path: "register", element: <Regist /> },
  { path: "404", element: <NotFound /> },
]);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
