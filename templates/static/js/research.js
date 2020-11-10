import React, { useState,useEffect } from 'react';

//Import Components
import Nav from './components/main/Nav'
import Footer from './components/main/Footer'
import Background from './components/main/Background'
import PapersMain from './research/PapersMain';

function App() {
    // States
    const [navOpen, setNavOpen] = useState(false);
    const papers = require('./components/data/research.json');

    // Add components to div
    return (
        <div className="App">
            <Background />
            <Nav 
                navOpen={navOpen}
                setNavOpen={setNavOpen}
            />
            <PapersMain 
                papers={papers}
            />
            <Footer />
        </div>
    );
}

export default App;