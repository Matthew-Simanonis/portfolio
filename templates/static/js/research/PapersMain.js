import React, { useEffect, useState } from "react";
import FadeIn from 'react-fade-in';
import PapersFull from './PapersFull'

const PapersMain = ({ papers }) => {
    return(
            <FadeIn delay={100} className='papers-container'>
                <h1>Research Reviews</h1>
                {papers.research.map(paper=> (
                    <PapersFull 
                        paper={paper}
                        key={paper.id}
                    />
                ))}
            </FadeIn>
    )
}

export default PapersMain;