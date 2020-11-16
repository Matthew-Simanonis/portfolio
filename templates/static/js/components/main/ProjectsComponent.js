import React, { useState } from "react";

import Project from './ProjectComponent'

const Projects = ({ projects } ) => {
    const [pressed, setPressed] = useState(false)
    const [position, setPosition] = useState(0)

    const drag = (el) => {
        if (pressed) {
            let x = el.clientX
            setPosition(x)
            let carousel = document.getElementById("carousel")
            carousel.scrollLeft += (position - x) * 2
        }
    }

    const clicked = (el) => {
        document.body.style.cursor = 'grabbing';
        setPressed(true)
        setPosition(el.clientX)
    }

    const drop = () => {
        setPressed(false)
        document.body.style.cursor = 'default';
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
        <section id="project-section"  onMouseUp={drop}>
            <div className='projects-container'>
                <h1>Projects</h1>
                <button className="arrow left-arrow" onClick={leftArrow}><i className="fas fa-angle-left"></i></button>
                <div className='Projects-carousel' id="carousel" onMouseDown={clicked} onMouseMove={drag}>
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