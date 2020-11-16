import React, { useState,useEffect } from 'react';

//Import Components
import Nav from './components/main/Nav'
import Footer from './components/main/Footer'
import Background from './components/main/Background'

function App() {
    // States
    const [navOpen, setNavOpen] = useState(false);

    // Add components to div
    return (
        <div className="App">
            <Nav 
                navOpen={navOpen}
                setNavOpen={setNavOpen}
            />
            <MusicCalendar 
            />
            <Footer />
        </div>
    );
}

export default App;