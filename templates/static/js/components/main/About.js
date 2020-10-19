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
                    <p>Though I currently aim to be a Profesional Developer, studying Biology is something I cherish, as it taught me strong critical thinking skills, and showed me how cells often think outside of the box, finding creative
                        solutions for tough problems. Additionally I've always had an appreciation for the ways the scientific community learned new things, and 
                        confirmed their hypthesis; through disciplined study and the collection of enough fool-proof data. This is what drew me to science, 
                        and why I see a future in science, through programming. 
                    </p>
                    <br></br>
                    <p>I am currently looking for a position where I can learn and grow my programming skills and knowledge, solve important problems,
                     and work collaboratively with others. A position where I can be challenged, be depended on, and be the difference 
                     by making an impact on peoples lives.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;