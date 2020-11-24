import React, { useState, useEffect } from 'react';

//Import Components
import Graph from './graph'
import SearchBar from './searchbar'
import Options from './options'

function App() {
    // States
    const [input, setInput] = useState('');
    const [dates, setDates] = useState([])
    const [stock, setStock] = useState('ETH-USD')
    const [prices, setPrices] = useState([])
    const [timeframe, setTimeframe] = useState(['1y'])

    // Add components to div
    const graphStock = (val) => {
        setStock(input.toUpperCase())
        fetch(`/getgraph?stock=${stock}&timeframe=${timeframe}`)
        .then(response => response.json())
        .then(data => {
            setPrices(data.prices);
            setDates(data.dates)
        });
    };

    return (
        <div className="App">
            <SearchBar
                input = {input}
                setInput = {setInput}
            />
            <button onClick={graphStock}>
                Search
            </button>
            <Graph
                stock={stock}
                input = {input}
                prices = {prices}
                dates = {dates}
                setTimeframe={setTimeframe}
            />
        </div>
    );
}

export default App;