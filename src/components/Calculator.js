import React from "react";
import Buttons from "./Buttons.js";
import Display from "./Display.js";

const CalculatorLayout = () => {
  return (
    <div className="calculator">
      <Display/>
      <Buttons/>
    </div>
  );
};

export default CalculatorLayout;