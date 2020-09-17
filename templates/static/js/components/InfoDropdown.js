import React, { useEffect, useState } from "react";

const InfoDropdown = ({ info, content }) => {

    const [dropDown, setDropDown] = useState(false);
    const title = info[0].toUpperCase() + info.substring(1);

    const select = () => {
        setDropDown(!dropDown)
    }

    return (      
        <div className={info}>
            <div className='info-title'>
                <h3 onClick={select}>{title}</h3>
                <i className={`fas fa-angle-right dropdown-arrow ${dropDown ? "rotate-arrow" : ""}`}></i>
            </div>
            <div className={`project-info info-text ${dropDown ? "show-text" : ""}`}>
                <p className='challenges' onClick={select}>{content}</p>
            </div>
        </div>
    )
}

export default InfoDropdown