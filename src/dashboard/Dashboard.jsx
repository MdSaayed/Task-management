import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Tasks from "../components/tasks/Tasks";
import AddTask from "../components/tasks/addTask";


const Dashboard = () => {


    return (
        <div className=''>
            <div className="flex">
                <div className="w-[300px] p-8">
                    <img src="https://iili.io/JAwAeb2.png" alt="" />
                    <ul className="flex flex-col gap-4 mt-16">
                        <li>
                            <button className="w-full">
                                <NavLink to="/tasks" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-[#2563DC] text-white py-1 px-2 rounded w-full text-center block" : "bg-[#EEF2FC] py-1 px-2 rounded text-black w-full text-center block"}>Tasks</NavLink>
                            </button>
                        </li>
                        <li>
                            <button className="w-full">
                                <NavLink to="/dashboard" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-[#2563DC] text-white py-1 px-2 rounded w-full text-center block" : "bg-[#EEF2FC] py-1 px-2 rounded text-black w-full text-center block"}>Dashboard</NavLink>
                            </button>
                        </li>
                        <li>
                            <button className="w-full">
                                <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-[#2563DC] text-white py-1 px-2 rounded w-full text-center block" : "bg-[#EEF2FC] py-1 px-2 rounded text-black w-full text-center block"}>Dashboard</NavLink>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className='border-l w-full min-h-screen py-4'>
                    <div>
                        <div className="flex gap-4 border-b px-10 pb-6 items-center">
                            <div className="w-[80%] ">
                                <form className="relative">
                                    <input className="border w-full rounded-sm py-1 px-2 " type="text" placeholder="Search by task name..." />
                                    <IoIosSearch className="absolute top-2 right-2" />
                                </form>
                            </div>
                            <div className="flex gap-4 items-center justify-end w-[20%]">
                                <IoMdNotificationsOutline className="w-[25px] h-[25px]" />
                                <img className="w-[30px] h-[30px]" src="https://i.ibb.co/yNPwYyk/User-Avatar.png" alt="" />
                            </div>
                        </div>
                        {/* outlet */}
                        <div className="p-10">
                            <AddTask />
                            <div>
                                <Tasks />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;