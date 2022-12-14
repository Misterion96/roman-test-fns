import findIntersectArrays from "./find-intersect-arrays";

const TEST_CASES = [
  {
    name: 'simple key',
    input: [[1, 1], [1, 2]],
    output: [1]
  },
  {
    name: 'empty args',
    input: [],
    output: []
  },
  {
    name: 'no has keys',
    input: [[1, 1], [2, 2]],
    output: []
  },
  {
    name: 'should get [5, 7]',
    input: [
      [1, 1, 7, 1, 1, 5],
      [7, 5],
      [5, 5, 5, 5, 5, 7]
    ],
    output: [5, 7]
  },
  {
    name: 'should get [5]',
    input: [
      [1, 1, 7, 1, 1, 5],
      [1, 1, 1, 1, 1, 5],
      [5, 5, 5, 5, 5, 7]
    ],
    output: [5]
  }
];

describe('test find intersect arrays', () => {
  TEST_CASES.forEach(({name, input, output}) => {
    it(name, () => {
      const result = findIntersectArrays(...input)
      expect(result.sort()).toStrictEqual(output.sort())
    })
  })
})
