import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import AllProperty from "../pages/all property/AllProperty";
import PropertyDetailsPage from "../pages/property details page/PropertyDetailsPage";
import AllAgency from "../pages/all agency/AllAgency";
import AgencyProfile from "../pages/agency profile/AgencyProfile";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <div>Error occurred!</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-property",
        element: <AllProperty></AllProperty>,
      },
      {
        path: "/all-property/:id",
        element: (
          <PrivateRoute>
            <PropertyDetailsPage></PropertyDetailsPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-agency",
        element: <AllAgency></AllAgency>,
      },
      {
        path: "/all-agency/:id",
        element: (
          <PrivateRoute>
            <AgencyProfile></AgencyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
