import React, { useState } from "react";
import Countdown from "react-countdown";
import "./Timer.css";


const Timer = () => {
  const [state, setState] = useState("");
  const handleButtonClick = (value) => {setState(value)};
  // Random component
    const Completionist = () => <span> Time's up! Great work!</span>;

  const renderer1 = ({seconds, minutes, hours, completed}) => {
  return (
    completed ? <Completionist /> : 
  <span>
    <div>
      <div id="countdown">
        <svg viewBox="-50 -50 100 100" strokeWidth="10">
          <circle r="45"></circle>
          <circle
            r="45"
            strokeDasharray="282.7433388230814"
            strokeDashoffset="282.7433388230814px"
            ></circle>
        </svg>
      </div>
    </div>
  </span>
  )};
  const renderer2 = ({seconds, minutes, hours, completed}) => {
    if (completed) {
      return(<Completionist />);} else{ 
        return(      
        <span>
      <div>
        <div id="countdown2">
          <svg viewBox="-50 -50 100 100" strokeWidth="10">
            <circle r="45"></circle>
            <circle
              r="45"
              strokeDasharray="282.7433388230814"
              strokeDashoffset="282.7433388230814px"
              ></circle>
          </svg>
        </div>
      </div>
      </span>
  )}
        };
  const renderer3 = ({seconds, minutes, hours, completed}) => {
    return(
      completed ? <Completionist /> : 
      <span>
      <div>
        <div id="countdown3">
          <svg viewBox="-50 -50 100 100" strokeWidth="10">
            <circle r="45"></circle>
            <circle
              r="45"
              strokeDasharray="282.7433388230814"
              strokeDashoffset="282.7433388230814px"
              ></circle>
          </svg>
        </div>
      </div>
    </span>
    )};

    // Renderer callback with condition
  return (
    <div>
          <button
            class="btn btn-primary"
            type="submit"
            onClick={() => handleButtonClick("twentySec")}
            > 20 Seconds </button>
          <button
            class="btn btn-primary"
            type="submit"
            onClick={() => handleButtonClick("thirtySec")}
            > 30 Seconds </button>
          <button
            class="btn btn-primary"
            type="submit"
            onClick={() => handleButtonClick("oneMin")}
            > 1 Minute </button>
      {state === "twentySec" &&   <Countdown date={Date.now() + 20000} renderer={renderer1} />}
      {state === "thirtySec" &&   <Countdown date={Date.now() + 30000} renderer={renderer2} />}
      {state === "oneMin" &&   <Countdown date={Date.now() + 60000} renderer={renderer3} />}
        </div>
  )};

export default Timer;
