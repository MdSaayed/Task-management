// AOS.js

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AosAnimation = ({ animation, duration = 1000, children }) => {
    useEffect(() => {
        AOS.init({
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <div data-aos={animation} data-aos-duration={duration} data-aos-offset="200">
            {children}
        </div>
    );
};

export default AosAnimation;
