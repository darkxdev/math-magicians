import React, { useState } from 'react';
import Buttons from './Buttons';
import Display from './Display';
import calculate from '../logic/calculate';

const CalculatorLayout = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const [display, setDisplay] = useState('0');

  const handleClick = (buttonName) => {
    const result = calculate({ total, next, operation }, buttonName);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);

    // Update display with full operation
    let fullExpression = '';
    if (!result.total && !result.next && !result.operation) {
      fullExpression = '0';
    } else {
      fullExpression = `${result.total || ''} ${result.operation || ''} ${result.next || ''}`;
    }
    setDisplay(fullExpression);
  };

  return (
    <div className="calculator">
      <Display display={display} />
      <Buttons handleClick={handleClick} />
    </div>
  );
};

export default CalculatorLayout;
