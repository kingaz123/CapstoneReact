import Home from "../pages/Home/Home";
import Carts from "../pages/Booking/Booking";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import { createBrowserRouter } from "react-router-dom";
import HomeTemplates from "../templates/home/home.templates";
import UserTemplate from "../templates/user/user.templates";

export const router = createBrowserRouter([
  {
    path: "home",
    element: <HomeTemplates />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "booking",
        element: <Carts />,
      },
    ],
  },
  {
    path: "user",
    element: <UserTemplate />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
