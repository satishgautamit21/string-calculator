import { add } from './add';

describe('Add Function', () => {
  test('should return the sum of two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
});
