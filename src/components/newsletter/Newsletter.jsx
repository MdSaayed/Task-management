import AosAnimation from "../aos/AOS"


const Newsletter = () => {
    return (
        <AosAnimation animation="fade-up" duration={600}>

            <div className="max-w-6xl mx-auto  pb-16">
                <div className="relative flex items-center flex-col justify-center bg-[#a6f2f5b9] py-12 rounded">
                    <img className="absolute top-0 left-0 w-44" src="https://i.ibb.co/4Nts9dT/Pills.png" alt="" />
                    <h2 className="text-[#252B42] text-4xl font-bold text-center">Subscribe to our Newsletter <br />& Get Company News</h2>
                    <div className="flex mt-8 px-6">
                        <input className="py-2 px-6 w-full rounded-l-full" type="text" placeholder="Enter Your Email Address...." />
                        <input className="bg-[#31A0FE] py-2 px-6 rounded-r-full text-white" type="submit" value="Subscibe" />
                    </div>
                </div>
            </div>
        </AosAnimation>
    );
};

export default Newsletter;