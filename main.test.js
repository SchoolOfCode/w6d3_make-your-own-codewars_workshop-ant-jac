import { highAndLow } from './main';

//👉 Write your tests below here:

// describe.each()(
//   'Given a string return an array with the highest and lowest number',
//   () => {
//     test('check when pass %i returns %s', () => {
//       const actual = highAndLow('3 4 7 20 1 45 7');
//       const expected = [1, 45];
//       expect(actual).toStrictEqual(expected);
//     });
//   }
// );

describe('Given a string return an array with the highest and lowest number', () => {
  const checks = [
    ['3 4 7 20 1 45 7', [1, 45]],
    ['234 34 1234 12 3 56', [3, 1234]],
    ['13 2 13 5', [2, 13]],
    ['23413 964521 234256 -5', [23413, 964521]],
    [5, `You can't use a number`],
  ];
  it.each(checks)('The string "%s" should return %s', (string, expected) => {
    expect(highAndLow(string)).toStrictEqual(expected);
  });
});
