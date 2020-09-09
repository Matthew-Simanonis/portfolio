import React, { Component } from 'react';

const Background = () => {
    return(
        <div className='Background'>
            <img className="dna" src={`/public/img/dna.png`}></img>
            <img className="molecules" src={`/public/img/molecules.png`}></img>
            <img className="molecules2" src={`/public/img/molecules.png`}></img>
        </div>
    )
}

export default Background;