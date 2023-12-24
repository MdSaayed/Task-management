import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";


const DashbordHeader = () => {
    const {user} = useContext(AuthContext);
    console.log(user);


    return (
        <div className="flex gap-4 border-b px-2 md:px-10 pb-6 items-center">
            <div className="w-[80%] ">
                <form className="relative">
                    <input className="border w-full rounded-sm py-1 px-2 " type="text" placeholder="Search by task name..." />
                    <IoIosSearch className="absolute top-2 right-2" />
                </form>
            </div>
            <div className="flex gap-4 items-center justify-end w-[20%]">
                <IoMdNotificationsOutline className="w-[25px] h-[25px]" />
                <img className="w-[30px] h-[30px] rounded-full" src={user?.photoURL} alt="" />
            </div>
        </div>
    );
};

export default DashbordHeader;