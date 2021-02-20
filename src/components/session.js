import React from "react";

function SessionInterval(props) {
  const increaseSession = function () {
    if (props.sessioninterval === 60) {
      return;
    }

    props.increaseSession();
  };

  const decreaseSession = function () {
    if (props.sessioninterval === 1) {
      return;
    }

    props.decreaseSession();
  };

  return (
    <div className = "session_container">
      <div className = "session_heading">
      <h4  className = "heading">Session Time</h4>
      </div>
    <div className="session_timer">
      <button disabled={props.isPlay === true ? "disabled" : ""} onClick={increaseSession}>+</button>
      <p>{props.sessioninterval}</p>
      <button disabled={props.isPlay === true ? "disabled" : ""} onClick={decreaseSession}>-</button>
    </div>
    </div>
  );
}

export default SessionInterval;
