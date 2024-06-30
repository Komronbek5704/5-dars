import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Services from './Services';
import Project from './Projects';

const App = () => {
    return (
        <Router>

            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/project" element={<Project />} />
            </Routes>
            
          
        </Router>
    );
};

export default App;