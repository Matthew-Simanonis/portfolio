import React, {useState} from 'react';

//Import Components
import Nav from './components/Nav'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Form from './components/Form'
import TodoList from './components/TodoList'


function App() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    return (
        <div className="App">
            <div className="home">
                <Nav />
                <Projects />
                <Form
                    inputText={inputText} 
                    setInputText={setInputText} 
                    todos={todos} setTodos={setTodos}
                />
                <TodoList todos={todos} setTodos={setTodos}/>
                <Footer />
            </div>
        </div>
    );
}

export default App;