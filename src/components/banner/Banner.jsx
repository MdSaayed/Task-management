const Banner = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-4 items-center justify-end max-w-6xl mx-auto py-28">
                <div>
                    <h1 className="text-5xl leading-[3.8rem] font-extrabold text-[#252B42]">
                        Streamline Your<br/> Workflow with<br/> ManageEase.
                    </h1>
                    <p className="mt-4 text-[#737373]">Optimize tasks effortlessly with ManageEase. Prioritize, collaborate, and achieve goals seamlessly. Revolutionize your workflow with simplicity and precision. Try ManageEase today.</p>
                    <div className="mt-4 flex gap-4">
                        <button className="bg-[#31A0FE] text-white hover:bg-transparent hover:text-[#252B42] border border-[#31A0FE] py-2 px-6 rounded-full">Explore Now</button>
                        <button className="hover:bg-[#31A0FE] hover:text-white bg-transparent text-[#252B42] border border-[#31A0FE] py-2 px-6 rounded-full">Watch Video</button>
                    </div>
                </div>
                <div className="flex items-center justify-center relative">
                    <div className="relative">
                        <img style={{ zIndex: 10 }} className="w-96 h-96" src="https://i.ibb.co/KzvqzSR/Rectangle-44.png" alt="" />
                        {/* The second image is set to a lower z-index to appear behind other images */}
                        <img style={{ zIndex: -5 }} className="absolute top-0 left-0" src="https://i.ibb.co/NLQZs5r/Ellipse-24.png" alt="" />
                        <img style={{ zIndex: 15 }} className="absolute  top-44 -left-6 lg:-left-16" src="https://i.ibb.co/p1SLF9m/card.png" alt="" />
                        <img style={{ zIndex: 15 }} className="absolute  top-24 -right-6 lg:-right-12 w-[8rem]" src="https://i.ibb.co/3SWSmgT/Widget.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
