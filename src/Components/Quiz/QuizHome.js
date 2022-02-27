import React from 'react';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';
import QuizLayout from './QuizLayout';

const QuizHome = () => {
    return (
        <div>
            <Navbar />
            <QuizLayout />
            <Footer />
        </div>
    );
};

export default QuizHome;