import React from 'react';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';
import Navbar from './Navbar';

test('Renders correctly', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
