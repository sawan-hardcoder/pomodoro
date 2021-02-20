import React from "react";

function BreakInterval(props) {

  const increaseCounter = function() {
    if (props.breakinterval === 60) {
        return;
    }

    props.increaseBreak();
  }

  const  decreaseCounter = function() {
    if (props.breakinterval === 1) {
        return; 
    }
    
    props.decreaseBreak();

  }


  return (
    <div className = "break_container">
    <div className = "break_heading">
      <h4 className = "heading">Break Time</h4>
      </div>
      <div className="break_timer">
      <button disabled={props.isPlay === true ? "disabled" : ""} onClick={increaseCounter}>+</button>
      <p>{props.breakinterval}</p>
      <button disabled={props.isPlay === true ? "disabled" : ""} onClick={decreaseCounter}>-</button> 
      </div>
    </div>

  );
}

export default BreakInterval;
