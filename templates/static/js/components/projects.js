import React, { useState } from "react";

import Project from './Project'

const scrollValue = 60;


const Projects = ({ projects, carouselState, setCarouselState } ) => {
    const scrollCapture = (el) => {
        let carousel = el.target;
        console.log(carousel.scrollLeft)
    }

    const leftArrow = (el) => {
        let carousel = el.currentTarget.parentNode;
        carousel.scrollLeft -= 120;
    }

    const rightArrow = (el) => {
        let carousel = el.currentTarget.parentNode;
        carousel.scrollLeft += 120;
    }

    
    return (
        <section>
            <div className='projects-container'>
                <div className='Projects-carousel' onScroll={scrollCapture}>
                <button className="left-arrow" onClick={leftArrow}><img className="arrow" src={`/public/img/left-arrow.png`}/></button>
                    <div className='projects'>
                        {projects.projects.map(project=> (
                            <Project 
                                project={project}
                                key={project.id}
                            />
                        ))}
                    </div>
                <button className="right-arrow"  onClick={rightArrow}><img className="arrow" src={`/public/img/right-arrow.png`}/></button>
                </div>
            </div>
        </section>
    )
}

export default Projects;