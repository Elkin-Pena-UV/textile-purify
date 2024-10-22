import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import Pollution from "../pages/pollution/Pollution";
import Acidity from "../pages/acidity/Acidity";
const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicRoute>
        {" "}
        <Login />{" "}
      </PublicRoute>
    ),
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        {" "}
        <Home />{" "}
      </ProtectedRoute>
    ),
  },
  {
    path: "/pollution",
    element: (
      <ProtectedRoute>
        {" "}
        <Pollution />{" "}
      </ProtectedRoute>
    ),
  },
  {
    path: "/acidity",
    element: (
      <ProtectedRoute>
        {" "}
        <Acidity />{" "}
      </ProtectedRoute>
    ),
  },
]);
export default Router;
