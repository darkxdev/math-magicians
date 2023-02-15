import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ handleClick }) => (
  <div className="button-grid">
    <div className="upper-button-grid">
      <button className="btn-grey button" type="button" onClick={() => handleClick('AC')}>
        AC
      </button>
      <button className="btn-grey button" type="button" onClick={() => handleClick('+/-')}>
        +/-
      </button>
      <button className="btn-grey button" type="button" onClick={() => handleClick('%')}>
        %
      </button>
      <button className="btn-orange button" type="button" onClick={() => handleClick('÷')}>
        ÷
      </button>

      <button className="btn-grey button" type="button" onClick={() => handleClick('7')}>
        7
      </button>
      <button className="btn-grey button" type="button" onClick={() => handleClick('8')}>
        8
      </button>
      <button className="btn-grey button" type="button" onClick={() => handleClick('9')}>
        9
      </button>
      <button className="btn-orange button" type="button" onClick={() => handleClick('x')}>
        x
      </button>

      <button className="btn-grey button" type="button" onClick={() => handleClick('4')}>
        4
      </button>
      <button className="btn-grey button" type="button" onClick={() => handleClick('5')}>
        5
      </button>
      <button className="btn-grey button" type="button" onClick={() => handleClick('6')}>
        6
      </button>
      <button className="btn-orange button" type="button" onClick={() => handleClick('-')}>
        -
      </button>

      <button className="btn-grey button" type="button" onClick={() => handleClick('1')}>
        1
      </button>
      <button className="btn-grey button" type="button" onClick={() => handleClick('2')}>
        2
      </button>
      <button className="btn-grey button" type="button" onClick={() => handleClick('3')}>
        3
      </button>
      <button className="btn-orange button" type="button" onClick={() => handleClick('+')}>
        +
      </button>
    </div>

    <div className="lower-button-grid">
      <button className="btn-grey button" type="button" onClick={() => handleClick('0')}>
        0
      </button>
      <button className="btn-grey button" type="button" onClick={() => handleClick('.')}>
        .
      </button>
      <button className="btn-orange button" type="button" onClick={() => handleClick('=')}>
        =
      </button>
    </div>
  </div>
);

Buttons.propTypes = { handleClick: PropTypes.func.isRequired };

export default Buttons;
