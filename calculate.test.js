import { add } from './calculate.js';

test('sanity check', function() {
  expect(1 + 1).toEqual(2);
});

test('1 + 1 = 2', function() {
  // Arrange
  const num1 = 1;
  const num2 = 1;
  // Action
  const result = add(num1, num2);
  // Assert
  expect(result).toEqual(2);
});

test('"1" + "1" = 2', function() {
  expect(add("1", "1")).toEqual(2);
});

test('"1" + 1 = 2', function() {
  expect(add("1", 1)).toBe(2);
});
test('"something" + 5 = Calculation Error', function () {
  expect(add("something", 5)).toEqual('Calculation Error')
});
test.todo('true + 10 = Error');
test.todo('3.14 + 10 = 13.14');
