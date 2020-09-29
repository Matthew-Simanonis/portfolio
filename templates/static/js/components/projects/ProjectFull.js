import React, { useEffect, useState } from "react";
import InfoDropdown from "./InfoDropdown";


const ProjectFull = ({ project }) => {

    const [dropDown, setDropDown] = useState(false);


    return (
        <div className={`project-full`}>
            <div className={`project-full-title`}>
                {project.title}
            </div>
            <div className='project-full-summary'>
                <div className='summary'>
                    <p>{project.summary}</p>
                </div>
                <img className="project-full-image" src={`/public/img/${project.picture}.png`}></img>
            </div>
            <div className='project-info'>
                <InfoDropdown 
                    info='description'
                    content={project.description}
                />
                <InfoDropdown 
                    info='challenges'
                    content={project.challenges}
                />
                <InfoDropdown 
                    info='Improvements'
                    content={project.improvements}
                />
                <div className='project-links'>
                    <a className='code-link' href={project.code} target="_blank">Code </a>
                    <a className='demo-link' href={project.url} target="_blank">Live Demo</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectFull;