import React from 'react';
import Banner from '../components/banner/Banner';
import Features from '../components/features/Features';
import Gallery from '../components/gallery/Gallery';
import Optimize from '../components/optimize/Optimize';
import Pricing from '../components/pricing/Pricing';
import Newsletter from '../components/newsletter/Newsletter';
import TargetAudiences from '../components/targetAudiences/TargetAudicences';
import AosAnimation from '../components/aos/AOS';

const Home = () => {
    return (
        <div>
            <Banner />
            <Features />
            <Gallery />
            <TargetAudiences />
            <Optimize />
            <Pricing />
            <Newsletter />
        </div>
    );
};

export default Home;