import React from "react";
import renderer from 'react-test-renderer';
import Navbar from "./Navbar";

test('Renders correctly', () => {
  const tree = renderer.create(<Navbar />);
  expect(tree).toMatchSnapshot();
})
