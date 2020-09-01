import React from "react";

import Project from './Project'


const Projects = ({ projects, carouselState, setCarouselState } ) => {
    return (
        <section>
            <div className='projects-container'>
            <button className="left-arrow"><img className="arrow" src={`/public/img/left-arrow.png`}/></button>
                <div className='Projects-carousel'>
                    <div className='projects'>
                        {projects.projects.map(project=> (
                            <Project 
                                project={project}
                                key={project.id}
                            />
                        ))}
                    </div>
                </div>
            <button className="right-arrow"><img className="arrow" src={`/public/img/right-arrow.png`}/></button>
            </div>
        </section>
    )
}

export default Projects;