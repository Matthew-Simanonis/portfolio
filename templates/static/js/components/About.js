import React, { useState } from "react";

const About = () => {
    
    return (
        <section id='about-section' >
            <div className='About-container'>
                <div className='about'>
                    <h1>About Me</h1>
                    <img id='uofi-logo' src='/public/img/uofi.png'></img>
                    <p>I am a self taught developer, with a B.S. in Molecular and Cellular 
                        Biology, a Minor in Chemistry, and a certificate of Neuroscience from the University of Illinois in Champaign-Urbana.</p>
                    <br></br>
                    <p>I am currently looking for a position where I can learn and grow my skills, solve important problems,
                     and work collaboratively with others.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;