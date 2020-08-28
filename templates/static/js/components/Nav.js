import React, { Component } from 'react';

export default class Nav extends Component {
    render() {
        return (
            <nav>
                <h1>Logo</h1>
                <ul className='nav-links'>
                    <li className='nav-link'>Home</li>
                    <li className='nav-link'>About</li>
                    <li className='nav-link'>Contact</li>
                </ul>
            </nav>
       )
    }
};