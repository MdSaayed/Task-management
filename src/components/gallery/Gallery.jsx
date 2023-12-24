import AosAnimation from "../aos/AOS"


const Gallery = () => {
    return (
        <AosAnimation animation="fade-up" duration={600}>
            <div className="max-w-6xl mx-auto py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div>
                        <h2 className="text-[#252B42] text-4xl font-bold">We take the work off <br /> your hands.</h2>
                        <p className=" text-[#737373] mt-4">Experience relief as we handle the workload for you, ensuring a stress-free and efficient experience.</p>
                        <p className=" text-[#737373] mt-4">Let us shoulder the tasks, freeing up your time for what matters most. Your workload, our responsibility.</p>
                    </div>
                    <div className="grid grid-cols-2 items-center">
                        <div>
                            <img className="w-full" src="https://i.ibb.co/5n7Dh4H/Rectangle-41.png" alt="" />
                        </div>
                        <div className="">
                            <img src="https://i.ibb.co/C1Tz0ZL/Rectangle-42.png" alt="" />
                            <img className="w-full" src="https://i.ibb.co/JBdmp98/Rectangle-43.png" alt="" />
                        </div>
                    </div>
                </div>
            </div >
        </AosAnimation>
    );
};

export default Gallery;