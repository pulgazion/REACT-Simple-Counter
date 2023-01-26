import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "../styles/index.css";

function SimpleCounter(props) {
  return (
    <div className="bigCounter">
      <div className="calendar">
        <i className="far fa-clock"></i>
      </div>
      <div className="four">{props.digitFour % 10}</div>
      <div className="three">{props.digitThree % 10}</div>
      <div className="two">{props.digitTwo % 10}</div>
      <div className="one">{props.digitOne % 10}</div>
    </div>
  );
}

SimpleCounter.propTypes = {
  digitFour: PropTypes.number,
  digitThree: PropTypes.number,
  digitTwo: PropTypes.number,
  digitOne: PropTypes.number,
};

let counter = 0;

ReactDOM.render(
  <SimpleCounter
    digitOne={Math.floor(counter / 1)}
    digitTwo={Math.floor(counter / 10)}
    digitThree={Math.floor(counter / 100)}
    digitFour={Math.floor(counter / 1000)}
  />,
  document.querySelector("#app")
);

setInterval(() => {
  counter++;
  ReactDOM.render(
    <SimpleCounter
      digitOne={Math.floor(counter / 1)}
      digitTwo={Math.floor(counter / 10)}
      digitThree={Math.floor(counter / 100)}
      digitFour={Math.floor(counter / 1000)}
    />,
    document.querySelector("#app")
  );
}, 1000);