import React from "react";

const SearchBar = ({input,setInput}) => {

    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
    return (
      <input 
      style={BarStyling}
      key="1"
      value={input}
      placeholder={"Input Stock Ticker"}
      onChange={(e) => setInput(e.target.value)}
      />
    );
  }

export default SearchBar;