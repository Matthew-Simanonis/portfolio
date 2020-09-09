import React, { useEffect, useState } from "react";

const Project = ({ project, selected, setSelected }) => {

    const [dropDown, setDropDown] = useState(false)

    const select = () => {
        setSelected(selected = project.id)
        setDropDown(true)
    }

    const deselect = () => {
        setSelected(selected = '-1')
        setDropDown(false)
    }

    return (
        <div className={`project`} id={project.title} onMouseOver={select} onMouseOut={deselect}>
            <div className={`project-title`}>
                {project.title}
            </div>
            <div className={`project-dropdown ${dropDown ? "show-dropdown" : ""}`}  onClick={deselect}>
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
                <div className='dropdown-links'>
                    <a className='code-link' href={project.code} target="_blank">Code</a>
                    <a className='demo-link' href={project.url} target="_blank">Live Demo</a>
                </div>
            </div>
            <div className={`project-item ${project.title}`}>
                <img className="project-image" src={`/public/img/${project.picture}.png`}></img>
            </div>
        </div>
    )
}

export default Project;