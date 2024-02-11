/**
 *
 * @param numbers list of numbers example [7], [0], [1,1,2], [0,1,0,0,1], [1,2,3,4,5,6,7,8,9,0]
 * @returns one number that odd number
 */
export function findOddNumber(numbers: number[]): number {
  let map: any = {};

  for (let i = 0; i < numbers.length; i++) {
    if (!map[numbers[i]]) {
      map[numbers[i]] = 1;
    } else {
      map[numbers[i]]++;
    }
  }

  for (let key in map) {
    if (map[key] % 2 !== 0) {
      return parseInt(key);
    }
  }

  return 0;
}
