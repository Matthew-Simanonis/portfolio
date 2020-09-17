import React, { useState,useEffect } from 'react';

//Import Components
import Nav from './components/Nav'
import Footer from './components/Footer'
import Background from './components/Background'
import ProjectsMain from './components/ProjectsMain'

function App() {
    // States
    const [navOpen, setNavOpen] = useState(false);
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
                <ProjectsMain 
                    projects = {projects}    
                />
            </div>
            <Footer />
        </div>
    );
}

export default App;