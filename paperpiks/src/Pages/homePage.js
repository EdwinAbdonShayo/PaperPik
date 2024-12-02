import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to PaperPiks</h1>
            <Link to="/upload">Get Started</Link>
        </div>
    );
};

export default HomePage;