import React, { useState,useEffect } from 'react';

//Import Components
import Nav from './components/Nav'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Form from './components/Form'
import Info from './components/info'
import Skills from './components/Skills'

function App() {
    // States
    const [inputText, setInputText] = useState('');
    const [carouselState, setCarouselState] = useState(0);
    const [navOpen, setNavOpen] = useState(false);
    const projects = require('./components/data/projects.json');


    // Use Effect

    // Functions
    const CarouselHandler = () => {
        setCarouselState(carouselState += 1)
    }
    // Add components to div
    return (
        <div className="App">
            <Nav 
                navOpen={navOpen}
                setNavOpen={setNavOpen}
            /> 
            <div className="home">
                <Info />
                <Projects 
                    projects={projects}
                    carouselState = {carouselState}
                    setCarouselState = {setCarouselState}
                />
                <Form
                    inputText={inputText} 
                    setInputText={setInputText} 
                />
                <Skills />
            </div>
            <Footer />
        </div>
    );
}

export default App;