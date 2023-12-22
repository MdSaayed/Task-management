import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Error from "../pages/404";
import UserDashboard from "../Layout/UserDashboard";
import UpdateTask from "../components/tasks/UpdateTask";
import DashboardHome from "../dashboard/DashboardHome";
import Dashboard from "../dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />
    },
    {
        path: "dashboard",
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard',
                element: <DashboardHome />
            },
            {
                path: '/dashboard/updateTask/:id',
                element: <UpdateTask />,
                loader: ({ params }) => fetch(`http://localhost:5173/tasks/${params.id}`)
            }
        ]
    }
]);

export default router;