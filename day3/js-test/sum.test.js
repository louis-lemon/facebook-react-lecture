const { sum, sumOf } = require('./sum');

// 하나의 그룹으로 만들어줄 땐 describe
// it 내부에는 다른 it, test를 넣을 순 없다.
describe('SUM', () => {
  // it === test
  test('1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('calulates all numbers', () => {
    const array = [1, 2, 3, 4, 5];
    expect(sumOf(array)).toBe(15);
  });
});
