import React, {useState} from 'react';

//Import Components
import Nav from './components/Nav'
import Projects from './components/projects'


function App() {
    const [counter, setCounter] = useState(0);
    const [toggle, setToggle] = useState(false);


    const toggler = () => {
        setToggle((prev) => !prev);
    }

    const incrementer = () => {
        setCounter(counter + 1);
    }

    return (
        <div className="App">
            <div className="home">
                <Nav />
                <Projects var1={counter}/>
                <h1 className={toggle ? "active" : ""}>Hello Boy</h1>
                <h2>Counter {counter}</h2>
                <button onClick={incrementer}>Click</button>
                <button onClick={toggler}>Toggle</button>
            </div>
        </div>
    );
}

export default App;