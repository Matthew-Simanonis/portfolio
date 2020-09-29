import React from "react";

const SkillImages = (languages) => {
    if (languages.len == false) {
        return ('')
    }
    return (
        <div className='skill-images'>
            <div className='skill-images-container' id={languages.languages[0]}>
                {languages.languages.map(language => (
                    <img id={language + '-logo'} className='skill-image' src={`/public/img/${language}-logo.png`}></img>
                ))}
            </div>
        </div>
    )
}

export default SkillImages;