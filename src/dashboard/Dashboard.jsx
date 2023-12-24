
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import DashbordHeader from "../components/dashbordHeader/DashbordHeader";
import { MdDashboard } from "react-icons/md";
import { GoTasklist } from "react-icons/go";
import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from "../providers/AuthProvider";



const Dashboard = () => {
    const navigate = useNavigate();
    const { user, signOutUser } = useContext(AuthContext);
    // user signout handle
    const handleSignOutUser = () => {
        signOutUser()
            .then(res => {
                toast.success('Logout successfully.');
                navigate('/');
            })

    }
    return (
        <div className=''>
            <div className="flex">
                <div className="w-[80px] lg:w-[300px] p-2 lg:p-8">
                    <Link to={'/'}><img src="https://iili.io/JAwAeb2.png" alt="" /></Link>
                    <ul className="flex flex-col gap-4 justify-between mt-16">
                        <ul className="flex flex-col gap-4">
                            <li>
                                <button className="w-full">
                                    <NavLink to="/dashboard" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-[#31A0FE] text-white py-1 px-2 rounded w-full text-center block" : "bg-[#EEF2FC] py-1 px-2 rounded text-black w-full text-center block"}><span className="lg:hidden"><MdDashboard /></span><span className="hidden lg:block">Dashboard</span></NavLink>
                                </button>
                            </li>
                            <li>
                                <button className="w-full">
                                    <NavLink to="/tasks" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-[#31A0FE] text-white py-1 px-2 rounded w-full text-center block" : "bg-[#EEF2FC] py-1 px-2 rounded text-black w-full text-center block"}><span className="lg:hidden"><GoTasklist /></span><span className="hidden lg:block">Tasks</span></NavLink>
                                </button>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <button className="w-full">
                                    <NavLink onClick={handleSignOutUser} to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "border-[#31A0FE] border text-red-700 py-1 px-2 rounded w-full text-center block" : "border-[#31A0FE] border py-1 px-2 rounded text-red-700 w-full text-center block"}><span className="lg:hidden"><GoTasklist /></span><span className="hidden lg:block">Logout</span></NavLink>
                                </button>
                            </li>
                        </ul>
                    </ul>
                </div>
                <div className='border-l w-full max-h-screen min-h-screen py-4 overflow-y-scroll'>
                    <div>
                        <div>
                            <DashbordHeader />
                        </div>
                        {/* outlet */}
                        <div className="p-2 lg:p-10">
                            <Outlet />
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;