import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import ReactDOM from "react-dom";
import Countdown from "react-countdown";
import "./Timer.css"

const Timer = () => {
  // const stopWatch = ;
  //   const countdown1 =   {  
  // };
  // Random component
  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return (
        <div className="container">
          <Completionist />
        </div>
      );
    } else {
      // Render a countdown
      return (
        <span>
          {/* {hours}:{minutes}:{seconds} */}
          <div>
            <div className="countdown">
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

          <div>
            <div className="countdown2">
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

          <div>
            <div className="countdown3">
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
      );
    }
  };

  // ReactDOM.render(
  return <Countdown date={Date.now() + 20000} renderer={renderer} />
  //   document.getElementById("root")
  // );
};

export default Timer;
