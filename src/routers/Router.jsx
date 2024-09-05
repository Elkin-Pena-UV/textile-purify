import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const Router = createBrowserRouter([
    {
      path:"/",
      element:(  
        <PublicRoute> <Login/>  </PublicRoute>
    )
    },
    {
      path:"/home",
      element:(
        <ProtectedRoute> <Home/> </ProtectedRoute>
    )
    },
  ])
  export default Router;