
import { NavLink, Outlet } from "react-router-dom";
import Tasks from "../components/tasks/Tasks";
import AddTask from "../components/tasks/addTask";
import DashbordHeader from "../components/dashbordHeader/DashbordHeader";


const Dashboard = () => {


    return (
        <div className=''>
            <div className="flex">
                <div className="w-[80px] lg:w-[300px] p-2 lg:p-8">
                    <img src="https://iili.io/JAwAeb2.png" alt="" />
                    <ul className="flex flex-col gap-4 mt-16">
                        <li>
                            <button className="w-full">
                                <NavLink to="/dashboard" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-[#2563DC] text-white py-1 px-2 rounded w-full text-center block" : "bg-[#EEF2FC] py-1 px-2 rounded text-black w-full text-center block"}><span className="lg:hidden">D</span><span className="hidden lg:block">Dashboard</span></NavLink>
                            </button>
                        </li>
                        <li>
                            <button className="w-full">
                                <NavLink to="/tasks" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-[#2563DC] text-white py-1 px-2 rounded w-full text-center block" : "bg-[#EEF2FC] py-1 px-2 rounded text-black w-full text-center block"}><span className="lg:hidden">T</span><span className="hidden lg:block">Tasks</span></NavLink>
                            </button>
                        </li>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;