import React from 'react';
import renderer from 'react-test-renderer';
import Buttons from './Buttons';

test('Renders correctly', () => {
  const tree = renderer.create(<Buttons handleClick={() => {}} />);
  expect(tree).toMatchSnapshot();
});
