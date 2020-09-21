import React from "react";

const Info = () => {
    return (
        <section>
            <div className='info-container'>
                <h1 className="name">Matthew Simanonis</h1>
                <h2 className="headline">Designed to Help</h2>
                <form action='/public/img/matthew_simanonis_resume.pdf' target="_blank" className="resume">
                    <button className='resume-btn'>Résumé </button>
                </form>
            </div>
        </section>
    )
}

export default Info;