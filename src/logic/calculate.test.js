import calculate from "./calculate";

test('Reseting function', () => {
  const buttonName = 'AC'
  const input = {
    total: '10',
    next: 5,
    operation: '+'
  };
  const output = {
    total: null,
    next: null,
    operation: null
  };
  expect(calculate(input, buttonName)).toEqual({total: null, next: null, operation: null})
});