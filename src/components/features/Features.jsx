import AosAnimation from "../aos/AOS";


const Features = () => {
    return (
        <AosAnimation animation="fade-up" duration={600}>
            <div className="max-w-6xl mx-auto py-16">
                <div className="flex items items-center justify-center flex-col gap-4">
                    <p className="text-[#252B42]">FUTURE FOR YOU</p>
                    <h2 className="text-[#252B42] text-4xl font-bold">Key Features</h2>
                    <p className=" text-[#737373] text-center">Streamlined task management, real-time updates, secure collaboration, <br />customizable workflows, and seamless integration for optimal efficiency.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-12">
                    <div className="flex items-center justify-center gap-4 flex-col">
                        <img className=" w-[60px]" src="https://i.ibb.co/HDjHvkc/Icon-Box.png" alt="" />
                        <div className="flex justify-center flex-col items-center gap-2">
                            <h2 className="text-base font-bold text-center">Task Management</h2>
                            <p className="text-[#737373] text-center">Organize and track tasks with ease.</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 flex-col">
                        <img className=" w-[60px]" src="https://i.ibb.co/PMzhfkh/Icon-Box.png" alt="" />
                        <div className="flex justify-center flex-col items-center gap-2">
                            <h2 className="text-base font-bold text-center">Team Collaboration</h2>
                            <p className="text-[#737373] text-center">Efficiently collaborate and communicate with your team.</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 flex-col">
                        <img className=" w-[60px]" src="https://i.ibb.co/pXkDG4R/Icon-Box.png" alt="" />
                        <div className="flex justify-center flex-col items-center gap-2">
                            <h2 className="text-base font-bold text-center">Project Tracking</h2>
                            <p className="text-[#737373] text-center">Monitor project progress and milestones.</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 flex-col">
                        <img className=" w-[60px]" src="https://i.ibb.co/yRBfKvx/Icon-Box.png" alt="" />
                        <div className="flex justify-center flex-col items-center gap-2">
                            <h2 className="text-base font-bold text-center">Reports and Analytics</h2>
                            <p className="text-[#737373] text-center">Access insightful data for informed decisions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </AosAnimation>
    );
};

export default Features;