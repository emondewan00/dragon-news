import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home";
import LogWithEmailAndPass from "../components/LogWithEmailAndPass";
import Register from "../components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LogWithEmailAndPass />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
