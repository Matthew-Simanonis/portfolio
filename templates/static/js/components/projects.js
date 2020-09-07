import React, { useState } from "react";

import Project from './Project'

const Projects = ({ projects, selected, setSelected } ) => {
    const scrollCapture = (el) => {
        let tar = el.target;
    }

    const leftArrow = () => {
        let carousel = document.getElementById("carousel")
        carousel.scrollLeft -= 200;
    }

    const rightArrow = () => {
        let carousel = document.getElementById("carousel")
        carousel.scrollLeft += 200;
    }

    
    return (
        <section>
            <h1>Projects</h1>
            <div className='projects-container'>
                <button className="arrow left-arrow" onClick={leftArrow}><i className="fas fa-angle-left"></i></button>
                <div className='Projects-carousel' id="carousel" onScroll={scrollCapture}>
                    <div className='projects'>
                        {projects.projects.map(project=> (
                            <Project 
                                project={project}
                                key={project.id}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        ))}
                    </div>
                </div>
                <button className="arrow right-arrow"  onClick={rightArrow}><i className="fas fa-angle-right"></i></button>
            </div>
        </section>
    )
}

export default Projects;