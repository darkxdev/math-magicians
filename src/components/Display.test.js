import React from "react";
import renderer from 'react-test-renderer';
import Display from "./Display";

test('Renders correctly', () => {
  const tree = renderer.create(<Display display={display} />);
  expect(tree).toMatchSnapshot();
})
