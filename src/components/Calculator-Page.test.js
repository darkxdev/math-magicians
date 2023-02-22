import React from "react";
import renderer from "react-test-renderer";
import CalculatorPage from "./Calculator-Page";

test('Renders correctly', () => {
  const tree = renderer.create(<CalculatorPage />).toJSON();
  expect(tree).toMatchSnapshot();
})