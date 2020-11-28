import React from "react";

const Options = ({setTimeframe}) => {
    const changeValue = (e) => {
        setTimeframe(e.target.value)
    }

    return (
        <div className='options'>
            <input type='radio' value='1mo' id='1mo' onChange={changeValue} name='timeframe'/>1 Month
            <input type='radio' value='1y' id='1y' onChange={changeValue} name='timeframe' defaultChecked/>1 Year
            <input type='radio' value='2y' id='2y' onChange={changeValue} name='timeframe'/>2 Years
            <input type='radio' value='max' id='all' onChange={changeValue} name='timeframe'/>All
        </div>
    )
}

export default Options;