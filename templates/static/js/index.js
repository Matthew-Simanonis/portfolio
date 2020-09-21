import React, { useState,useEffect } from 'react';
import FadeIn from 'react-fade-in';

//Import Components
import Nav from './components/Nav'
import Projects from './components/ProjectsComponent'
import Footer from './components/Footer'
import Form from './components/Form'
import Info from './components/info'
import Skills from './components/Skills'
import About from './components/About'
import Background from './components/Background'

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