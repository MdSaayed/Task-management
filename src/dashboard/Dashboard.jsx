import { IoMdNotificationsOutline } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";


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
                            <div className="flex justify-between items-center">
                                <div>
                                    <h2 className="font-bold text-2xl text-[#3D3D3D]">Tasks</h2>
                                </div>
                                <div>
                                    <button className="bg-[#2563DC] text-white rounded py-2 px-6 flex items-center gap-2 text-sm ">New task <GoPlus className="text-white" /></button>
                                </div>
                            </div>
                            <div className="grid gap-2 grid-cols-3 py-8">
                                <div className="p-4 bg-[#CAD9F6] border rounded">
                                    <div>
                                        <h2 className="text-sm font-semibold">To do</h2>
                                    </div>
                                    {/* to  do here */}
                                    <div className="bg-white rounded p-2 mt-2" draggable>
                                        <div className="flex justify-between items-center">
                                            <h2 className="font-bold text-xl">To do title</h2>
                                            <div className="flex gap-2">
                                                <MdOutlineModeEditOutline />
                                                <RiDeleteBin6Line />
                                            </div>
                                        </div>
                                        <p className="text-[#5C5C5C] text-sm mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, accusantium?</p>
                                    </div>
                                </div>
                                <div className="p-4 bg-[#FFE4C2] border rounded">
                                    <div>
                                        <h2 className="text-sm font-semibold">On Going</h2>
                                    </div>
                                    <div className="bg-white rounded p-2 mt-2">
                                        <div className="flex justify-between items-center">
                                            <h2 className="font-bold text-xl">To do title</h2>
                                            <div className="flex gap-2">
                                                <MdOutlineModeEditOutline />
                                                <RiDeleteBin6Line />
                                            </div>
                                        </div>
                                        <p className="text-[#5C5C5C] text-sm mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, accusantium?</p>
                                    </div>
                                </div>
                                <div className="p-4 bg-[#FAD0C6] border rounded">
                                    <div>
                                        <h2 className="text-sm font-semibold">Completed</h2>
                                    </div>
                                    <div className="bg-white rounded p-2 mt-2">
                                        <div className="flex justify-between items-center">
                                            <h2 className="font-bold text-xl">To do title</h2>
                                            <div className="flex gap-2">
                                                <MdOutlineModeEditOutline />
                                                <RiDeleteBin6Line />
                                            </div>
                                        </div>
                                        <p className="text-[#5C5C5C] text-sm mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, accusantium?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;