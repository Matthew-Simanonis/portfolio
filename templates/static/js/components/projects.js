import React, { useState } from "react";

import Project from './Project'

const Projects = ({ projects, carouselState, setCarouselState } ) => {
    const scrollCapture = (el) => {
        let carousel = el.target;
        console.log(carousel.scrollLeft)
    }

    const leftArrow = (el) => {
        let carousel = el.currentTarget.parentNode;
        carousel.scrollLeft -= 181;
    }

    const rightArrow = (el) => {
        let carousel = el.currentTarget.parentNode;
        carousel.scrollLeft += 181;
    }

    
    return (
        <section>
            <div className='projects-container'>
                <div className='Projects-carousel' onScroll={scrollCapture}>
                <button className="left-arrow arrow" onClick={leftArrow}><i className="fas fa-angle-left"></i></button>
                    <div className='projects'>
                        {projects.projects.map(project=> (
                            <Project 
                                project={project}
                                key={project.id}
                            />
                        ))}
                    </div>
                <button className="right-arrow arrow"  onClick={rightArrow}><i className="fas fa-angle-right"></i></button>
                </div>
            </div>
        </section>
    )
}

export default Projects;