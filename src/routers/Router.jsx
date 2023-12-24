import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Error from "../pages/404";
import UserDashboard from "../Layout/UserDashboard";
import UpdateTask from "../components/tasks/UpdateTask";
import DashboardHome from "../dashboard/DashboardHome";
import Dashboard from "../dashboard/Dashboard";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import PricingPage from "../pages/PricingPage";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/signin",
                element: <Signin />
            },
            {
                path: "/signUp",
                element: <SignUp />
            },
            {
                path: "/pricing",
                element: <PricingPage />
            },
            {
                path: "/contact",
                element: <Contact />
            },
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><DashboardHome /></PrivateRoute>
            },
            {
                path: '/dashboard/updateTask/:id',
                element: <UpdateTask />,
                loader: ({ params }) => fetch(`https://taskmanagement-five.vercel.app/tasks/${params.id}`)
            }
        ]
    }
]);

export default router;