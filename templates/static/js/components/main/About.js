import React, { useState } from "react";

const About = () => {
    
    return (
        <section id='about-section' >
            <div className='About-container'>
                <div className='about'>
                    <h1>About Me</h1>
                    <img id='uofi-logo' src='/public/img/uofi.png'></img>
                    <p>I am Matthew Simanonis. I'm a self taught developer, who graduated with a B.S. in Molecular and Cellular 
                        Biology, a Minor in Chemistry, and a certificate of Neuroscience from the University of Illinois in Champaign-Urbana in 2017.</p>
                    <br></br>
                    <p>About 2 years after graduation, I felt stuck at my job, lacking the skills to make a difference, so I took it upon myself to learn
                        to program. I had some experience in college as an undergraduate research assistant with Python and MATLAB and it was something I 
                        picked up quickly. Upon starting my first coding class I was hooked. I loved the idea of creating something from scratch and the reward of solving these tough
                        problems.</p>
                    <br></br>
                    <p>My experience is mostly with Python and Javascript, as I enjoy their flexability and robust libraries. This allows me to organize data, display that data
                        and design helpful web pages. I enjoy using React.js and Flask to host my web apps, as they are simple and allow for a lot of freedom.
                    </p>
                    <br></br>
                    <p>Though I currently aim to be a Profesional Developer, studying Biology is something I cherish. It taught me strong critical thinking skills, and showed me how cells often think outside of the box, finding creative
                        solutions for tough problems. I've always had an appreciation for the ways the scientific community learned new things, and 
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