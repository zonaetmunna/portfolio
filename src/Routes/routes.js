import React from "react";

const Home = React.lazy(() => import("../Pages/Home/Home"));
const Blog = React.lazy(() => import("../Pages/Blog/Blog"));
const Signup = React.lazy(() => import("../Pages/Signup/Signup"));
const Login = React.lazy(() => import("../Pages/Login/Login"));
const Dashboard = React.lazy(() => import("../Pages/Dashboard/Dashboard"));

const routes = [
  {
    path: "/",
    name: "home",
    element: Home,
    role: ["*"],
  },
  {
    path: "/blog",
    name: "blog",
    element: Blog,
    role: ["*"],
  },
  {
    path: "/signup",
    name: "signup",
    element: Signup,
    role: ["*"],
  },
  {
    path: "/login",
    name: "login",
    element: Login,
    role: ["*"],
  },
  {
    path: "/dashboard",
    name: "dashboard",
    element: Dashboard,
    role: ["admin"],
  },
];

export default routes;
