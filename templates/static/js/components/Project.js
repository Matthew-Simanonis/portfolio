import React from "react";

const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
}
// Complete Button
const completeHandler = () => {
    setTodos(todos.map(item => {
        if (item.id === todo.id) {
            return {
                ...item, completed: !item.completed
            }
        }
        return item;
    }));
}

const Project = ({ project }) => {
    return (
        <div className='project'>
            <li className={`project-item ${project.title}`}>{project.title}</li>
        </div>
    )
}

export default Project;