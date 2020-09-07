import React, { useEffect, useState } from "react";

const Project = ({ project, selected, setSelected }) => {

    const [dropDown, setDropDown] = useState(false)

    const select = () => {
        setSelected(selected = project.id)
        setDropDown(!dropDown)
    }

    const deselect = () => {
        setSelected(selected = '-1')
        setDropDown(!dropDown)
    }

    return (
        <div className={`project`} id={project.title} onMouseOver={select} onMouseOut={deselect}>
            <div className={`project-dropdown ${dropDown ? "show-dropdown" : ""}`}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
            </div>

            <div className={`project-item ${project.title}`}>
                {project.title}
                <img className="project-image" src={`/public/img/${project.picture}.png`}></img>
            </div>
        </div>
    )
}

export default Project;