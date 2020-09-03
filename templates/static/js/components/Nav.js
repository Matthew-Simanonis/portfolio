import React from 'react';

const Nav = ({ navOpen, setNavOpen }) => {
    const openNav = () => {
        setNavOpen(!navOpen)
        console.log(navOpen)
    }

    const openPortfolio = () => {
        console.log('broke')
    }

    return (
        <nav>
            <div className="Logo">
                <a className='ms' href="#">
                    MS
                </a>
            </div>
            <button onClick={openPortfolio} className="portfolio-btn">Portfolio<img className="eye" src={`/public/img/eye.png`}/></button>
            <button onClick={openNav} className="hamburger">
                <i className="fas fa-bars"></i>
            </button>
            <ul className={`nav-links${navOpen ? " show" : ""}`}>
                <li className='nav-link'>Home</li>
                <li className='nav-link'>About</li>
                <li className='nav-link'>Contact</li>
            </ul>
        </nav>
    )
};

export default Nav;