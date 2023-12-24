import React from 'react';
import AosAnimation from '../aos/AOS';

const Optimize = () => {
    return (
        <AosAnimation animation="fade-up" duration={1000}>
            <div className='max-w-6xl mx-auto py-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-6'>
                    <div>
                        <img src="https://i.ibb.co/Js95WN0/Frame-9.png" alt="" />
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h2 className="text-[#252B42] text-4xl font-bold">Optimize Your <br />Management Processes <br />Today!</h2>
                        <p className=" text-[#737373] mt-4">Enhance your management processes effortlessly. Optimize today for streamlined efficiency and heightened productivity.</p>
                        <div className='flex items-center gap-4'>
                            <img className='w-[45%]' src="https://i.ibb.co/PzcZs5B/App-Store.png" alt="" />
                            <img className='w-[45%]' src="https://i.ibb.co/fSbm1yr/Google-Play.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </AosAnimation >
    );
};

export default Optimize;