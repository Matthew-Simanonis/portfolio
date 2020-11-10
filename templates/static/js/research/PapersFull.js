import React, { useEffect, useState } from "react";
import FadeIn from 'react-fade-in';

const PapersFull = ({ paper }) => {
    return(
            <FadeIn delay={100} className='projects-container'>
                <h1>Papers</h1>
            </FadeIn>
    )
}

export default PapersFull;