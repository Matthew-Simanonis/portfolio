import React, { useState,useEffect } from 'react';

//Import Components
import Nav from './components/Nav'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Form from './components/Form'
import TodoList from './components/TodoList'
import Info from './components/info';

function App() {
    // States
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [navOpen, setNavOpen] = useState(false);
    const projects = (['horse-bets', 'album-anniversary'])

    // Use Effect
    // Change Filter on status change
    useEffect(() => {
        filterHandler();
        }, [todos,status]);

    // Functions
    // Filter function
    const filterHandler = () => {
        switch(status){
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true))
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false))
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
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
                />
                <Form
                    inputText={inputText} 
                    setInputText={setInputText} 
                    todos={todos} 
                    setTodos={setTodos}
                    setStatus={setStatus}
                />
                <TodoList 
                    todos={filteredTodos}
                    setTodos={setTodos}
                />
            </div>
            <Footer />
        </div>
    );
}

export default App;