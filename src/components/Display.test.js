import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import Display from './Display';

test('Renders correctly', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <Display display="test display" />
    </MemoryRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
