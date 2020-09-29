import React, { useState,useEffect } from 'react';

//Import Components
import Nav from './components/main/Nav'
import Footer from './components/main/Footer'
import Background from './components/main/Background'
import ProjectsMain from './components/projects/ProjectsMain'

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