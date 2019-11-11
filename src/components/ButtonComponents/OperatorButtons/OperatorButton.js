import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="btn" onClick={() => props.click(props.numberChar)}>{props.operatorChar}</button>
    </>
  );
};


export default OperatorButton
