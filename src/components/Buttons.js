import React from 'react';

const Buttons = () => (
  <div className="button-grid">
    <div className="upper-button-grid">
      <button className="btn-grey button" type="button">AC</button>
      <button className="btn-grey button" type="button">+/-</button>
      <button className="btn-grey button" type="button">%</button>
      <button className="btn-orange button" type="button">÷</button>

      <button className="btn-grey button" type="button">7</button>
      <button className="btn-grey button" type="button">8</button>
      <button className="btn-grey button" type="button">9</button>
      <button className="btn-orange button" type="button">x</button>

      <button className="btn-grey button" type="button">4</button>
      <button className="btn-grey button" type="button">5</button>
      <button className="btn-grey button" type="button">6</button>
      <button className="btn-orange button" type="button">-</button>

      <button className="btn-grey button" type="button">1</button>
      <button className="btn-grey button" type="button">2</button>
      <button className="btn-grey button" type="button">3</button>
      <button className="btn-orange button" type="button">+</button>
    </div>

    <div className="lower-button-grid">
      <button className="btn-grey button" type="button">0</button>
      <button className="btn-grey button" type="button">.</button>
      <button className="btn-orange button" type="button">=</button>
    </div>
  </div>
);

export default Buttons;
