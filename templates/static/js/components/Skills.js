import React, { useState } from "react";

import SkillImages from './SkillImages'

const Skills = () => {
    
    return (
        <section>
            <div className='skills-container'>
                <h1>Skills</h1>
                <div className='skill' id='front-end'>
                    <SkillImages 
                        languages = {['html', 'css', 'js', 'react']}
                    />
                    <h2>Front-End</h2>
                    <ul className='skill-list'>
                        <li>HTML/CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                    </ul>
                    <p>Experience creating a multitude of webpages with responsive, accessable, self-made designs</p>
                </div>
                <div className='skill'>
                    <SkillImages 
                        languages = {[]}
                    />
                    <h2>Back-End</h2>
                    <ul className='skill-list'>
                        <li>Flask</li>
                        <li>Django</li>
                        <li>SQL</li>
                    </ul>
                    <p>Skills to create and maintain complex backend applications, serving unique users with specialized databases</p>
                </div>
                <div className='skill'>
                    <SkillImages 
                        languages = {['python']}
                    />
                    <h2>Data-Analytics</h2>
                    <ul className='skill-list'>
                        <li>Python</li>
                        <li>Pandas/Numpy</li>
                        <li>Keras/Tensorflow</li>
                    </ul>
                    <p>Easily interpret and organize data using Python, allowing for custom manipulation and visualization</p>
                </div>
                <div className="skill">
                    <h2>Problem Solving</h2>
                    <p>I enjoy problem solving and finding creative solutions. No task seems too large when taken inch by inch</p>
                </div>
            </div>
        </section>
    )
}

export default Skills;