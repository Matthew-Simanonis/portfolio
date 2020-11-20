import React, { useState,useEffect } from 'react';

//Import Components
import Graph from './graph'
import SearchBar from './searchbar'

function App() {
    // States
    const [input, setInput] = useState('');
    const [dates, setDates] = useState([])
    const [stock, setStock] = useState('ETH-USD')
    const [prices, setPrices] = useState([1,2])

    // Add components to div
    const graphStock = (val) => {
        fetch('/getgraph', {method:"POST", body:input})
        .then(response => response.json())
        .then(data => {
            setPrices(data.prices);
            setDates(data.dates)
        });
        }

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
            />
        </div>
    );
}

export default App;