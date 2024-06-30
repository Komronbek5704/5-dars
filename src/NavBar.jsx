import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'; // CSS faylni ishlatishingiz mumkin

const NavBar = () => {
    return (
        
      <div className='navbar-container'>

        <div className='navbar-logo'>
             <img src="../public/logo.svg" alt="logo" />
        </div>
       <div className='navbar'>
            <nav className='nav'> 
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                Home
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>
                Services
            </NavLink>
            <NavLink to="/project" className={({ isActive }) => isActive ? "active" : ""}>
                Project
            </NavLink>
        </nav>
        </div>
        
        
        </div>

        
        
    );
};

export default NavBar;