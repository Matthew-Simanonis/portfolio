import React from 'react';

const Nav = ({ navOpen, setNavOpen }) => {
    const openNav = () => {
        setNavOpen(!navOpen)
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
            <button onClick={openNav} className={`hamburger${navOpen ? " selected" : ""}`}>
                <i className={`${navOpen ? "fas fa-times" : "fas fa-bars"}`}></i>
            </button>
            <div className={`links${navOpen ? " show" : ""}`}>
                <ul className={`nav-links`}>
                    <li className='nav-link'><a href="#">Home</a></li>
                    <li className='nav-link'><a href="#">About</a></li>
                    <li className='nav-link'><a href="#">Contact</a></li>
                    <li className='nav-link'><a href="#">Resume</a></li>
                </ul>
            </div>
        <div className={`${navOpen ? "darken" : ""}`}></div>
        </nav>
    )
};

export default Nav;