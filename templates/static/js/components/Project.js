import React from "react";

const Project = ({ Project }) => {
    return (
        <div className='project'>
            <li className={`project-item ${Project ? "completed" : ""}`}></li>
        </div>
    )
}

export default Project;