import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../components/AppLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ServiceDetails from "../pages/ServiceDetails";
import { PrivateRoutes } from "../components/PrivateRoutes";
import ErrorPage from "../pages/ErrorPage";
import Contact from "../pages/Contact";
import { PublicRoutes } from "../components/PublicRoutes";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: (
          <PrivateRoutes>
            <About />
          </PrivateRoutes>
        ),
      },
      {
        path: "/contact",
        element: (
          <PrivateRoutes>
            <Contact />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: (
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        ),
      },
      {
        path: "/register",
        element: (
          <PublicRoutes>
            <Register />
          </PublicRoutes>
        ),
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoutes>
            <ServiceDetails />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
