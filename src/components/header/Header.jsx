import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { GrClose } from 'react-icons/gr';
import { HiBars3 } from 'react-icons/hi2';
import { HiLogout } from "react-icons/hi";
import { AuthContext } from './../../providers/AuthProvider';


const Header = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const [menu, setMenu] = useState(false);
    // user signout handle
    const handleSignOutUser = () => {
        signOutUser()
            .then(res => toast.success('Logout successfully.'))

    }

    // theme 



    return (
        <div className="">
            {/* mobile and tablet navbar */}
            <nav className="md:flex justify-between items-center py-2 max-w-6xl mx-auto flex lg:hidden p-2 lg:px-0 bg-white">
                <ul>
                    <li><NavLink className={'text-xl font-extrabold'}>
                        <img src="https://iili.io/JAwAeb2.png" alt="" /></NavLink></li>
                </ul>
                <ul>
                    <div className="flex gap-3 items-center">
                        {
                            user ? <>
                                <li className="text-center uppercase">
                                    <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active font-semibold text-[10px]" : "text-black"}>{user?.displayName}</NavLink>
                                </li>
                                <li>
                                    <img className="w-[30px] h-[30px] rounded-full" src={user?.photoURL ? user?.photoURL : 'https://i.ibb.co/8xpdsJy/user-demo.png'} alt="" />
                                </li>
                            </> : ''
                        }
                        <HiBars3 onClick={() => setMenu(!menu)} className="text-2xl text-black" />
                    </div>

                    <ul className={menu ? "flex items-center gap-6 relative" : 'hidden'}>
                        <ul className={'flex shadow-sm flex-col justify-center absolute -top-9 z-10 bg-white items-center -right-2 h-[100vh] gap-4 w-[300px]'}>
                            <GrClose onClick={() => setMenu(!menu)} className={'absolute top-4 left-2 z-10'} />
                            <li className="text-xl">
                                <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-[#31A0FE] font-semibold" : "text-black"}>Home</NavLink>
                            </li>
                            <li className="text-xl">
                                <NavLink to="/pricing" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-[#31A0FE] font-semibold" : "text-black"}>Pricing</NavLink>
                            </li>
                            <li className="text-xl">
                                <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-[#31A0FE] font-semibold" : "text-black"}>Contact</NavLink>
                            </li>
                            {
                                user ? <>
                                    <li className="text-xl">
                                        <NavLink to="/dashboard" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-[#31A0FE] font-semibold" : "text-black"}>Dashboard</NavLink>
                                    </li>
                                    <li className="text-xl">
                                        <NavLink onClick={handleSignOutUser} to="#" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active " : "text-black"}>LogOut</NavLink>
                                    </li>
                                </> : <>
                                    <li className="text-xl">
                                        <NavLink to="/signin" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-[#31A0FE] font-semibold" : "text-black"}>SignIn</NavLink>
                                    </li>
                                </>
                            }

                        </ul>
                    </ul>
                </ul>
            </nav>

            {/* desktop navbar  */}
            <nav className="md:hidden justify-between items-center py-2 max-w-6xl mx-auto hidden lg:flex">
                <ul>
                    <li><NavLink className={'text-xl font-extrabold'}><img src="https://iili.io/JAwAeb2.png" alt="" />
                    </NavLink></li>
                </ul>
                <ul className="flex items-center gap-6">
                    <li>
                        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-[#31A0FE] font-semibold" : "text-[#252B42]"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/pricing" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-[#31A0FE] font-semibold" : "text-[#252B42]"}>Pricing</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-[#31A0FE] font-semibold" : "text-[#252B42]"}>Contact</NavLink>
                    </li>
                    {
                        user ? <>
                            <li>
                                <NavLink to="/dashboard" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-[#31A0FE] font-semibold" : "text-[#252B42]"}>Dashboard</NavLink>
                            </li>
                            <li>
                                <HiLogout className="cursor-pointer" onClick={handleSignOutUser} ></HiLogout>
                            </li>
                        </> : <>
                            <li>
                                <NavLink to="/signin" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-[#31A0FE] font-semibold" : "text-[#252B42]"}>Signin</NavLink>
                            </li>
                        </>

                    }

                </ul>
            </nav>
        </div>
    );
};

export default Header;