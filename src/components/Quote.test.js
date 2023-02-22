import React from 'react';
import renderer from 'react-test-renderer';
import Quote from './Quote';

test('Renders correctly', () => {
  const tree = renderer.create(<Quote />);
  expect(tree).toMatchSnapshot();
});
