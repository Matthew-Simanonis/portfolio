import React, { useEffect, useState } from "react";
import ProjectFull from "./ProjectFull";
import FadeIn from 'react-fade-in';

const ProjectsMain = ({ projects }) => {
    return(
        <div className='project-main'>
            <FadeIn delay={100}>
                <h1>Projects</h1>
                {projects.projects.map(project=> (
                    <ProjectFull 
                        project={project}
                        key={project.id}
                    />
                ))}
            </FadeIn>
        </div>
    )
}

export default ProjectsMain;