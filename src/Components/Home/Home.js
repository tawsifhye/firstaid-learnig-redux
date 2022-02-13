import React from 'react';
import Courses from './Courses';
import FreeResources from './FreeResources';
import Hero from './Hero';
import StudentReviewSection from './StudentReviewSection';
import LatestNews from './LatestNews';
import TipsSection from './TipsSection';

const Home = () => {
    return (
        <div>
            <Hero />
            <Courses />
            <FreeResources />
            <TipsSection />
            <StudentReviewSection />
            <LatestNews />
            <TipsSection />
        </div>
    );
};

export default Home;