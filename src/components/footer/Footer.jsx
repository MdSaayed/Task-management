import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className="bg-[#333] py-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto text-white">
                <div className="col-span-2 md:col-span-3 lg:col-span-2">
                    <img src="https://i.ibb.co/3v2GhrC/Logo-Design-1.png" alt="" />
                    <p className="mt-4 text-sm">Free task and project management software for team collaboration</p>
                    <div className="flex gap-4 items-center mt-4">
                        <Link to={'https://www.facebook.com/findsayedkhan/'}><FaFacebook /></Link>
                        <Link to={'https://www.instagram.com/mahammad_saayed/'}><FaInstagram /></Link>
                        <Link to={'https://twitter.com/Md_Saayed/'}><FaTwitter /></Link>
                        <Link to={'https://www.linkedin.com/in/mdsaayed/'}><FaLinkedinIn /></Link>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold">Product</h2>
                    <div className="flex flex-col mt-4 gap-2">
                        <Link className=" text-sm">Features</Link>
                        <Link className=" text-sm">Download</Link>
                        <Link className=" text-sm">Why use</Link>
                        <Link className=" text-sm">Pricing</Link>
                        <Link className=" text-sm">Use cases</Link>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold">Support</h2>
                    <div className="flex flex-col mt-4 gap-2">
                        <Link className=" text-sm">Help center</Link>
                        <Link className=" text-sm">What's new</Link>
                        <Link className=" text-sm">Contact</Link>
                        <Link className=" text-sm">Feedback</Link>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold">Resources</h2>
                    <div className="flex flex-col mt-4 gap-2">
                        <Link className=" text-sm">Knowledge hub</Link>
                        <Link className=" text-sm">Templates</Link>
                        <Link className=" text-sm">Blog</Link>
                        <Link className=" text-sm">Glossary</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;