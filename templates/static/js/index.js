import React, { useState,useEffect } from 'react';
import FadeIn from 'react-fade-in';

//Import Components
import Nav from './components/main/Nav'
import Projects from './components/main/ProjectsComponent'
import Footer from './components/main/Footer'
import Info from './components/main/Info'
import Skills from './components/main/Skills'
import About from './components/main/About'
import Background from './components/main/Background'

function App() {
    // States
    const [navOpen, setNavOpen] = useState(false);
    const projects = require('./data/projects.json');

    // Add components to div
    return (
        <div className="App">
            <Background />
            <Nav 
                navOpen={navOpen}
                setNavOpen={setNavOpen}
            />
            <div className="home">
                <FadeIn delay={100}>
                    <Info />
                    <Projects 
                        projects={projects}
                    />
                    <Skills />
                    <About />
                </FadeIn>
            </div>
            <Footer />
        </div>
    );
}

export default App;