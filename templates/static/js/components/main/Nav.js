import React from 'react';

const Nav = ({ navOpen, setNavOpen }) => {
    const openNav = () => {
        setNavOpen(!navOpen)
    }

    return (
        <nav>
            <div className="Logo">
                <a className='ms' href="/">
                    MS
                </a>
            </div>
            <form action="/projects" method="get">
                <button className="portfolio-btn">Portfolio<img className="eye" src={`/public/img/eye.png`}/></button>
            </form>
            <button onClick={openNav} className={`hamburger${navOpen ? " selected" : ""}`}>
                <i className={`${navOpen ? "fas fa-times" : "fas fa-bars"}`}></i>
            </button>
            <div className={`links${navOpen ? " show" : ""}`}>
                <ul className={`nav-links`}>
                    <li className='nav-link'><a href="/">Home</a></li>
                    <li className='nav-link'><a href="/projects">Projects</a></li>
                    <li className='nav-link'><a href="/research">Research</a></li>
                    <li className='nav-link'><a href="/public/img/matthew_simanonis_resume.pdf" target="_blank">Resume</a></li>
                </ul>
            </div>
        <div className={`${navOpen ? "darken" : ""}`}></div>
        </nav>
    )
};

export default Nav;