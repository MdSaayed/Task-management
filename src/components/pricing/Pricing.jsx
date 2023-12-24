import { FaCheck } from "react-icons/fa6";
import AosAnimation from "../aos/AOS";


const Pricing = () => {
    return (
        <AosAnimation animation="fade-up" duration={1000}>
            <div className="max-w-6xl mx-auto py-16">
                <div className="py-16">
                    <div className="flex items items-center justify-center flex-col gap-4">
                        <h2 className="text-[#252B42] text-4xl font-bold">Our Pricing Plan</h2>
                        <p className=" text-[#737373] text-center">Explore our transparent pricing plans designed to suit your needs, <br />offering flexibility, value, and affordability for every user.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
                        <div className="flex items-center flex-col gap-6 p-8 rounded hover:shadow-lg shadow-md border">
                            <h2 className="tesxt-xl font-bold">Basic Plan</h2>
                            <h3 className="text-2xl font-bold">20$ <span className="text-xl">/Month</span></h3>
                            <p className=" text-[#737373] text-center">Slate helps you see how many more days you need.</p>
                            <ul className="flex flex-col gap-3">
                                <li className="flex items-center gap-4 "> <FaCheck className="text-green-600" /><span>Unlimited product updates</span></li>
                                <li className="flex items-center gap-4 "> <FaCheck className="text-green-600" /><span>Unlimited product </span></li>
                                <li className="flex items-center gap-4 "> <FaCheck className="text-green-600" /><span>1GB  Cloud storage</span></li>
                                <li className="flex items-center gap-4 "> <FaCheck className="text-green-600" /><span>Email and community support</span></li>
                            </ul>
                            <div>
                                <button className="bg-green-600 text-white hover:bg-transparent hover:text-green-600 border border-green-600 py-2 px-6 rounded-full">Continue to Membership</button>
                            </div>
                        </div>

                        <div className="flex items-center flex-col gap-6 p-8 rounded hover:shadow-lg shadow-md border">
                            <h2 className="tesxt-xl font-bold">Favorite Plan</h2>
                            <h3 className="text-2xl font-bold">60$ <span className="text-xl">/Month</span></h3>
                            <p className=" text-[#737373] text-center">Slate helps you see how many more days you need.</p>
                            <ul className="flex flex-col gap-3">
                                <li className="flex items-center gap-4 "> <FaCheck className="text-green-600" /><span>Comprehensive features for growing teams</span></li>
                                <li className="flex items-center gap-4 "> <FaCheck className="text-green-600" /><span>Unlimited product updates</span></li>
                                <li className="flex items-center gap-4 "> <FaCheck className="text-green-600" /><span>5GB Cloud storage</span></li>
                                <li className="flex items-center gap-4 "> <FaCheck className="text-green-600" /><span>Priority email support</span></li>
                            </ul>
                            <div>
                                <button className="bg-[#31A0FE] text-white hover:bg-transparent hover:text-[#31A0FE] border border-[#31A0FE] py-2 px-6 rounded-full">Continue to Membership</button>
                            </div>
                        </div>

                        <div className="flex items-center flex-col gap-6 p-8 rounded hover:shadow-lg shadow-md border">
                            <h2 className="tesxt-xl font-bold">Standart Plan</h2>
                            <h3 className="text-2xl font-bold">40$ <span className="text-xl">/Month</span></h3>
                            <p className=" text-[#737373] text-center">Slate helps you see how many more days you need.</p>
                            <ul className="flex flex-col gap-3">
                                <li className="flex items-center gap-4 "> <FaCheck className="text-green-600" /><span>Advanced features for established businesses</span></li>
                                <li className="flex items-center gap-4 "> <FaCheck className="text-green-600" /><span>Unlimited product updates</span></li>
                                <li className="flex items-center gap-4 "> <FaCheck className="text-green-600" /><span>10GB Cloud storage</span></li>
                                <li className="flex items-center gap-4 "> <FaCheck className="text-green-600" /><span>24/7 priority support with dedicated account manager</span></li>
                            </ul>
                            <div>
                                <button className="bg-[#EC5C2E] text-white hover:bg-transparent hover:text-[#EC5C2E] border border-[#EC5C2E] py-2 px-6 rounded-full">Continue to Membership</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AosAnimation>
    );
};

export default Pricing;