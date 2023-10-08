import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../components/AppLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ServiceDetails from "../pages/ServiceDetails";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails />,
      },
    ],
  },
]);

export default router;
