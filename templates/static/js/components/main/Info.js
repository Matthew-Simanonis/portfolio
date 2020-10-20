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
            </div>
        </section>
    )
}

export default Info;