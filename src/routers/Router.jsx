import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Error from "../pages/404";
import UserDashboard from "../Layout/UserDashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />
    },
    {
        path: "dashboard",
        element: <UserDashboard />
    }
]);

export default router;