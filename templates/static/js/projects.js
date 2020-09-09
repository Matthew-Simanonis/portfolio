import React, { useState,useEffect } from 'react';

//Import Components
import Nav from './components/Nav'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Form from './components/Form'
import Info from './components/info'
import Skills from './components/Skills'
import About from './components/About'

function App() {
    // States
    const [navOpen, setNavOpen] = useState(false);
    const [selected, setSelected] = useState('0');
    const projects = require('./components/data/projects.json');

    // Add components to div
    return (
        <div className="App">
            <div className="background"></div>
            <Nav 
                navOpen={navOpen}
                setNavOpen={setNavOpen}
            />
            <div className="projects-home">
                <Info />
            </div>
            <Footer />
        </div>
    );
}

export default App;