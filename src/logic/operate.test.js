import operate from './operate';

describe('operate', () => {
  it('adds two numbers', () => {
    expect(operate('5', '3', '+')).toBe('8');
  });

  it('subtracts two numbers', () => {
    expect(operate('5', '3', '-')).toBe('2');
  });

  it('multiplies two numbers', () => {
    expect(operate('5', '3', 'x')).toBe('15');
  });

  it('divides two numbers', () => {
    expect(operate('10', '2', '÷')).toBe('5');
  });

  it('returns an error message when attempting to divide by 0', () => {
    expect(operate('10', '0', '÷')).toBe("Can't divide by 0.");
  });

  it('finds the modulo of two numbers', () => {
    expect(operate('10', '3', '%')).toBe('1');
  });

  it('returns an error message when attempting to find the modulo with a divisor of 0', () => {
    expect(operate('10', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  it('throws an error for an unknown operation', () => {
    expect(() => operate('5', '3', '^')).toThrow("Unknown operation '^'");
  });
});
