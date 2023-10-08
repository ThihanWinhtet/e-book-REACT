import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";
import HomePage from "../Pages/HomePage";
import WelcomePage from "../Pages/WelcomePage";
import ErrorPage from "../Pages/ErrorPage";
import RegisterPage from "../Pages/RegisterPage";
import AdminPage from "../Pages/AdminPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/home", element: <HomePage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/welcome", element: <WelcomePage /> },
    ],
  },
  { path: "/admin", element: <AdminPage /> },
]);

export default router;
