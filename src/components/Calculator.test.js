import React from "react";
import renderer from "react-test-renderer";
import CalculatorLayout from "./Calculator";

test('Renders correctly', () => {
  const tree = renderer.create(<CalculatorLayout className="calculator-layout" />).toJSON();
  expect(tree).toMatchSnapshot();
});