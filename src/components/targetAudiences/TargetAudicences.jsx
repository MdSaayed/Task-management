// TargetAudiences.js

import React from 'react';
import { FaCode, FaPaintBrush, FaBriefcase } from 'react-icons/fa';
import AosAnimation from '../aos/AOS';

const TargetAudiences = () => {
    const audienceData = [
        {
            title: 'Developers',
            description: 'Tailwind CSS is a utility-first CSS framework that makes styling your projects easier and faster.',
            icon: <FaCode size={50} style={{ color: '#df4a2f', padding: '5px', borderRadius: '5px' }} />,
            bgColor: '#FFF',
        },
        {
            title: 'Designers',
            description: 'Enjoy the flexibility and customization options to create visually appealing user interfaces.',
            icon: <FaPaintBrush size={50} style={{ color: '#51ff41', padding: '5px', borderRadius: '5px' }} />,
            bgColor: '#FFF',
        },
        {
            title: 'Project Managers',
            description: 'Efficiently manage tasks and projects with a clean and organized design.',
            icon: <FaBriefcase size={50} style={{ color: '#4e42ff', padding: '5px', borderRadius: '5px' }} />,
            bgColor: '#FFF',
        },
    ];

    return (
        <AosAnimation animation="fade-up" duration={1000}>
            <section className="bg-[#d1e9f354] py-16 mb-16">
                <div className="container mx-auto">
                    <h2 className="text-[#252B42] text-4xl font-bold text-center">Target Audiences</h2>
                    <p className=" text-[#737373] mt-4 text-center">Explore our tailored solutions for developers, designers, and project managers.<br /> Elevate your project collaboration and productivity!</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        {audienceData.map((audience, index) => (
                            <div
                                key={index}
                                className={`bg-white p-6 rounded-lg shadow-md text-center`}
                                style={{ backgroundColor: audience.bgColor }}
                            >
                                <div className="flex items-center justify-center mb-4">
                                    {audience.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{audience.title}</h3>
                                <p className="text-gray-700 ">{audience.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </AosAnimation>
    );
};

export default TargetAudiences;
