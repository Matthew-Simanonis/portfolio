import React, { useState,useEffect } from 'react';

//Import Components
import Nav from './components/Nav'
import Footer from './components/Footer'
import Info from './components/info'
import Background from './components/Background'

function App() {
    // States
    const [navOpen, setNavOpen] = useState(false);
    const [selected, setSelected] = useState('0');
    const projects = require('./components/data/projects.json');

    // Add components to div
    return (
        <div className="App">
            <Background />
            <Nav 
                navOpen={navOpen}
                setNavOpen={setNavOpen}
            />
            <div className="projects-home home">
                <Info />
            </div>
            <Footer />
        </div>
    );
}

export default App;