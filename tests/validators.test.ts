import { parseNumbers } from '../src/validators/lineValidator.ts';

describe('line validator', () => {
  test('parseNumbers ok and fail', () => {
    expect(parseNumbers(['1', '-2.5', '0'])).toEqual([1, -2.5, 0]);
    expect(() => parseNumbers(['1', '2a', '3'])).toThrow();
  });
});
