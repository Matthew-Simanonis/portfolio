import React, { useState,useEffect } from 'react';

//Import Components
import Nav from '../main/Nav'
import Footer from '../main/Footer'
import Background from '../main/Background'
import ProjectsMain from './ProjectsMain'

function App() {
    // States
    const [navOpen, setNavOpen] = useState(false);
    const projects = require('../../data/projects.json');

    // Add components to div
    return (
        <div className="App">
            <Background />
            <Nav 
                navOpen={navOpen}
                setNavOpen={setNavOpen}
            />
            <div className="projects-home home">
                <ProjectsMain 
                    projects = {projects}    
                />
            </div>
            <Footer />
        </div>
    );
}

export default App;