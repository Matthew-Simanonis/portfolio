import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, 
            { text: inputText, completed: false, id: Math.random() * 1000}]
        );
        setInputText("");
    }

    return(
        <form>
            <input value={inputText} onChange={inputTextHandler}></input>
            <button onClick={submitTodoHandler} type='submit'>
                <i className='fas fa-plus-square'></i>
            </button>
        </form>
    )
}

export default Form;