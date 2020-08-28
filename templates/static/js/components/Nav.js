import React, { Component } from 'react';
import { useCase } from 'react';

export default class Nav extends Component {
    render() {
        return (
            <nav>
                <h1>Logo</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
       )
    }
};