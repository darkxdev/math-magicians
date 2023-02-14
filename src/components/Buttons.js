import React from "react";

const Buttons = () => {
  return (
    <div className="button-grid">
      <div className="upper-button-grid">
        <button className="btn-grey button">AC</button>
        <button className="btn-grey button">+/-</button>
        <button className="btn-grey button">%</button>
        <button className="btn-orange button">÷</button>

        <button className="btn-grey button">7</button>
        <button className="btn-grey button">8</button>
        <button className="btn-grey button">9</button>
        <button className="btn-orange button">x</button>

        <button className="btn-grey button">4</button>
        <button className="btn-grey button">5</button>
        <button className="btn-grey button">6</button>
        <button className="btn-orange button">-</button>

        <button className="btn-grey button">1</button>
        <button className="btn-grey button">2</button>
        <button className="btn-grey button">3</button>
        <button className="btn-orange button">+</button>
      </div>
      
      <div className="lower-button-grid">
        <button className="btn-grey button">0</button>
        <button className="btn-grey button">.</button>
        <button className="btn-orange button">=</button>
      </div>
    </div>
  );
};

export default Buttons