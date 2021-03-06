import React from 'react';
import Courses from './Courses';
import FreeResources from './FreeResources';
import Hero from './Hero';
import StudentReviewSection from './StudentReviewSection';
import LatestNews from './LatestNews';
import TipsSection from './TipsSection';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const Home = () => {
    return (
        <div>
            <Hero />
            <Courses />
            <FreeResources />
            <TipsSection />
            <StudentReviewSection />
            <LatestNews />
        </div>
    );
};

export default Home;