import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ value }) => (
  <div className="display-row">
    <input type="text" className="display" value={value} readOnly />
  </div>
);

Display.propTypes = { value: PropTypes.string.isRequired };

export default Display;
