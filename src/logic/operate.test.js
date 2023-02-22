import operate from './operate';

test('Add funcionality test', () => {
  expect(operate(2, 3, '+')).toBe('5');
});
