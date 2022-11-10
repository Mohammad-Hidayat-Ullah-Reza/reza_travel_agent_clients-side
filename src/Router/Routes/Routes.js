import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddService from "../../Page/AddService/AddService";
import Home from "../../Page/Home/Home";
import Login from "../../Page/Login/Login";
import MyReviews from "../../Page/MyReviews/MyReviews";
import ServiceDetail from "../../Page/ServiceDetail/ServiceDetail";
import Services from "../../Page/Services/Services";
import SignUp from "../../Page/SignUp/SignUp";
import UpdateReview from "../../Page/UpdateReview/UpdateReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://b6a11-service-review-server-side-omega.vercel.app/fake"
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () =>
          fetch(
            "https://b6a11-service-review-server-side-omega.vercel.app/services"
          ),
      },
      {
        path: "/services/:id",
        element: <ServiceDetail></ServiceDetail>,
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-omega.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/reviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/review/:id",
        element: <UpdateReview></UpdateReview>,
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-omega.vercel.app/review/${params.id}`
          ),
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
