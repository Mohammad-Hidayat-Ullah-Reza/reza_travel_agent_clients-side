import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Page/Home/Home";
import Login from "../../Page/Login/Login";
import ServiceDetail from "../../Page/ServiceDetail/ServiceDetail";
import Services from "../../Page/Services/Services";
import SignUp from "../../Page/SignUp/SignUp";

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
    ],
  },
]);
