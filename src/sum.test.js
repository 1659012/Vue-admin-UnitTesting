const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + (-3) to equal -2', () => {
  expect(sum(1, -3)).toBe(-2);
});

test('adds undefined + 2 to equal undefined', () => {
  expect(sum(undefined, 2)).toBe(undefined);
});

test('adds null + 2 to equal undefined', () => {
  expect(sum(undefined, 2)).toBe(undefined);
});