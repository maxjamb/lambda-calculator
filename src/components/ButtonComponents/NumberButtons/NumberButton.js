import React from "react";


const NumberButton = (props) => {
  console.log(props)
  let btnClass = "btn"
  return <button className= {btnClass} onClick={() => props.click(props.numberChar)}>{props.numberChar}</button>
};
{/* Display a button element rendering the data being passed down from the parent container on props */}

export default NumberButton;