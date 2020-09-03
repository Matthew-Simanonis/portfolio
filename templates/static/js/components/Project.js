import React from "react";

const Project = ({ project }) => {
    return (
        <div className='project'>
            <li className={`project-item ${project.title}`}>{project.title}</li>
        </div>
    )
}

export default Project;