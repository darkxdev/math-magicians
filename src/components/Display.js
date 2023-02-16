import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ display }) => (
  <div className="display-row">
    <input type="text" className="display" value={display} readOnly />
  </div>
);

Display.propTypes = { display: PropTypes.string.isRequired };

export default Display;
