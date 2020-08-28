import React, { useState,useEffect } from 'react';

//Import Components
import Nav from './components/Nav'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Form from './components/Form'
import TodoList from './components/TodoList'


function App() {
    // States
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

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

    return (
        <div className="App">
            <div className="home">
                <Nav />
                <Projects />
                <Form
                    inputText={inputText} 
                    setInputText={setInputText} 
                    todos={todos} 
                    setTodos={setTodos}
                    setStatus={setStatus}
                />
                <TodoList 
                    todos={filteredTodos}
                    setTodos={setTodos}/>
                <Footer />
            </div>
        </div>
    );
}

export default App;