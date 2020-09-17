import React, { useState } from "react";

import Project from './ProjectComponent'

const Projects = ({ projects } ) => {
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
        <section id="project-section">
            <div className='projects-container'>
                <h1>Projects</h1>
                <button className="arrow left-arrow" onClick={leftArrow}><i className="fas fa-angle-left"></i></button>
                <div className='Projects-carousel' id="carousel" onScroll={scrollCapture}>
                    <div className='projects'>
                        {projects.projects.map(project=> (
                            <Project 
                                project={project}
                                key={project.id}
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