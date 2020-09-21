import React, { Component } from 'react';

const Footer = () => {
    return(
        <div className='footer'>
            <a href='https://github.com/Matthew-Simanonis/' target="_blank">
                <img src={`/public/img/github.png`} id='github-btn'></img>
            </a>
            <div className='footer-text'>
                <p>Matthew Simanonis 2020</p>
                <p>msimanonis@gmail.com</p>
            </div>
            <a href='https://www.linkedin.com/in/matt-simanonis-85733415b' target="_blank">
                <img src={`/public/img/linkedin.png`} id='linkedin-btn'></img>
            </a>
        </div>
    )
}

export default Footer;