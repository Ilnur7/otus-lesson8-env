import { sum } from './sum';

describe('sum', () => {
  it('should work correct', () => {
    expect(sum(1, 30)).toBe(31);
  });
});
