import calculate from './calculate';

describe('calculate', () => {
  it('should handle AC button correctly', () => {
    expect(calculate({ total: 10, next: 5, operation: '+' }, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should handle number button correctly', () => {
    expect(calculate({ total: 10, next: '5', operation: '+' }, '2')).toEqual({
      total: 10,
      next: '52',
      operation: '+',
    });
  });

  it('should handle "." button correctly', () => {
    expect(calculate({ total: 10, next: '5', operation: '+' }, '.')).toEqual({
      total: 10,
      next: '5.',
      operation: '+',
    });
  });

  it('should handle "=" button correctly', () => {
    expect(calculate({ total: 10, next: '5', operation: '+' }, '=')).toEqual({
      total: '15',
      next: null,
      operation: null,
    });
  });

  it('should handle "+/-" button correctly', () => {
    expect(calculate({ total: '10', next: '5', operation: '+' }, '+/-')).toEqual({
      total: '10',
      next: '-5',
      operation: '+',
    });
  });

  it('should handle operation button correctly', () => {
    expect(calculate({ total: 10, next: '5', operation: '+' }, '-')).toEqual({
      total: '15',
      next: null,
      operation: '-',
    });
  });
});
