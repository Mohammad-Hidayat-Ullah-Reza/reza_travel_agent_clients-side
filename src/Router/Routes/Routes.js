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
        loader: () => fetch("http://localhost:5000/fake"),
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
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/services/:id",
        element: <ServiceDetail></ServiceDetail>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/reviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>,
          </PrivateRoute>
        ),
      },
      {
        path: "/review/:id",
        element: <UpdateReview></UpdateReview>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/review/${params.id}`),
      },
      {
        path: "/addService",
        element: <AddService></AddService>,
      },
    ],
  },
]);
