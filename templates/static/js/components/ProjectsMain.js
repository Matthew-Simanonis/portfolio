import React, { useEffect, useState } from "react";
import ProjectFull from "./ProjectFull";
import FadeIn from 'react-fade-in';

const ProjectsMain = ({ projects }) => {
    return(
            <FadeIn delay={100} className='projects-container'>
                <h1>Projects</h1>
                {projects.projects.map(project=> (
                    <ProjectFull 
                        project={project}
                        key={project.id}
                    />
                ))}
            </FadeIn>
    )
}

export default ProjectsMain;