import React from "react";

import Project from './Project'

const Projects = ({ projects } ) => {
    return (
        <div className='Projects-container'>
            {projects.map(project => (
                <Project 
                    Project={project}
                />
            ))}
        </div>
    )
}

export default Projects;