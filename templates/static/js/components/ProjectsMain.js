import React, { useEffect, useState } from "react";
import ProjectFull from "./ProjectFull";

const ProjectsMain = ({ projects, selected, setSelected }) => {
    return(
        <div className='project-main'>
            <h1>Projects</h1>
            {projects.projects.map(project=> (
                <ProjectFull 
                    project={project}
                    key={project.id}
                    selected={selected}
                    setSelected={setSelected}
                />
            ))}
        </div>
    )
}

export default ProjectsMain;