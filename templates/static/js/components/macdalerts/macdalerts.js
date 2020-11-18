import React, { useState,useEffect } from 'react';

//Import Components
import Graph from './components/macdalerts/graph'
import SearchBar from './components/macdalerts/searchbar'

function App() {
    // States
    const [navOpen, setNavOpen] = useState(false);

    // Add components to div
    return (
        <div className="App">
            <SearchBar>

            </SearchBar>
            <Graph>

            </Graph>
        </div>
    );
}

export default App;