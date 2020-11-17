import React from "react";

const Info = () => {
    return (
        <section>
            <div className='info-container'>
                <h1 className="name">Matthew<br></br> Simanonis</h1>
                <h3 className="phonetics">[sim-<i>uh</i>-noh-nis]</h3>
                <h2 className="headline">Designed to Help</h2>
                <form action='/public/img/matthew_simanonis_resume.pdf' target="_blank" className="resume">
                    <button className='resume-btn'>Resume </button>
                </form>
                <img id='portrait' className='portrait' src={`/public/img/portrait.jpg`}></img>
                <h4>Hello,</h4>
                <p>
                I'm Matt, an aspiring software developer with a background in molecular biology. I believe science and technology all go hand-in-hand; with
                their focus on logic, data and analytics. With my knowledge of both, I look to make an impact on the world, and help those around me. 
                </p>
            </div>
        </section>
    )
}

export default Info;