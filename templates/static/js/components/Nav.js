import React from 'react';

const Nav = ({ navOpen, setNavOpen }) => {
    const navTransition = () => {
        setNavOpen()
    }
    return (
        <nav>
            <div className="Logo">MS</div>
            <button onClick={navTransition} className="portfolio-btn">Portfolio</button>
            <i src="public/img/eye.png"></i>
            <button className="hamburger">
                <i className="fas fa-bars"></i>
            </button>
            <ul className='nav-links'>
                <li className='nav-link'>Home</li>
                <li className='nav-link'>About</li>
                <li className='nav-link'>Contact</li>
            </ul>
        </nav>
    )
};

export default Nav;