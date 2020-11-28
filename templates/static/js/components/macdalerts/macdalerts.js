import React, { useState, useEffect } from 'react';

//Import Components
import Graph from './graph'
import SearchBar from './searchbar'

function App() {
    // States
    const [input, setInput] = useState('');
    const [dataframe, setDataframe] = useState({prices: [0]})
    const [stock, setStock] = useState('ETH-USD')
    const [timeframe, setTimeframe] = useState(['1y'])

    // Add components to div
    const fetchGraph = () => {
        fetch(`/getgraph?stock=${stock}&timeframe=${timeframe}`)
        .then(response => response.json())
            .then(json => {
                if (json.prices.length < 1) {
                    setDataframe({prices: [0]})
                }
                setDataframe(json)
        });
        };

    const newStock = () => {
        setStock(input.toUpperCase())
    }

    useEffect(() => {
        fetchGraph();
    }, [stock, timeframe] )

    return (
        <div className="App">
            <SearchBar
                input = {input}
                setInput = {setInput}
            />
            <button onClick={newStock}>
                Search
            </button>
            <Graph
                stock={stock}
                dataframe = {dataframe}
                input = {input}
                setTimeframe={setTimeframe}
            />
        </div>
    );
}

export default App;