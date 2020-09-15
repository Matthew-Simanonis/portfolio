import React, { useEffect, useState } from "react";

const ProjectFull = ({ project, selected, setSelected }) => {

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
                <h3>Description</h3>
                <div className='project-description'>
                    <p className='description'>{project.description}</p>
                </div>
                <h3>Challenges</h3>
                <div className='project-challenges'>
                    <p className='challenges'>{project.challenges}</p>
                </div>
                <h3>Links</h3>
                <div className='project-links'>
                    <a className='code-link' href={project.code} target="_blank">Code</a>
                    <a className='demo-link' href={project.url} target="_blank">Live Demo</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectFull;