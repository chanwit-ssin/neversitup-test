/**
 *
 * @param texts list of string [":)", ":(", ":>"]
 * @returns amount of smily face detected
 */
export function countSmilyFace(texts: string[]): number {
  //   let stack = [];
  let count = 0;

  for (let i = 0; i < texts.length; i++) {
    if (texts[i].match(/([:;])(?:[-~]?)(\)|D)/)) {
      count += 1;
    }
  }

  return count;
}
