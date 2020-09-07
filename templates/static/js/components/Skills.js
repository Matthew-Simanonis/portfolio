import React, { useState } from "react";

const Skills = () => {
    
    return (
        <section>
            <div className='Skills-container'>
                <div className='skill'>
                    <h2>Front-End</h2>
                    <ul>
                        <li>HTML/CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                    </ul>
                    <p>I use some of this stuff to make website</p>
                    <a>Examples</a>
                </div>
                <div className='skill'>
                    <h2>Back-End</h2>
                    <ul>
                        <li>Flask</li>
                        <li>Django</li>
                        <li>SQL</li>
                    </ul>
                    <p>I use some of this stuff to make website</p>
                    <a>Examples</a>
                </div>
                <div className='skill'>
                    <h2>Data-Analytics</h2>
                    <ul>
                        <li>Python</li>
                        <li>Pandas/Numpy</li>
                        <li>Keras/Tensorflow</li>
                    </ul>
                    <p>I use some of this stuff to make website</p>
                    <a>Examples</a>
                </div>
                <div className="skill">
                    <h2>Problem Solving</h2>
                    <p>Ehh I dont know how to problem solve</p>
                    <a>Examples</a>
                </div>

            </div>
        </section>
    )
}

export default Skills;