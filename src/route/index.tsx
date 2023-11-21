import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("../pages/Home/Home"));
const Page404 = lazy(() => import("../pages/Page404/Page404"));
const Login = lazy(() => import("../pages/Login/Login"));
const BookingTicket = lazy(() => import("../pages/Booking/MainBookingTicket"));
const Register = lazy(() => import("../pages/Register/Register"));
const MovieInfo = lazy(() => import("../components/MovieInfo/MovieInfo"));

import HomeTemplate from "../templates/home/home.templates";

export const router = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <HomeTemplate />
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Register />
          </Suspense>
        ),
      },
      {
        path: "booking",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <BookingTicket />
          </Suspense>
        ),
      },
      {
        path: "detail/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <MovieInfo />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Page404 />
      </Suspense>
    ),
  },
]);
