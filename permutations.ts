/**
 *
 * @param text string of value example "aabb", "abcde"
 * @returns {string[]} string array of result
 */
export function findPermutations(text: string): string[] {
  if (text === "") return [];

  let res: string[] = [];
  dfs(text, [], Array(text.length).fill(false), res);
  return res;
}

function dfs(text: string, path: string[], used: boolean[], res: string[]) {
  if (path.length === text.length) {
    let s = path.join("");
    if (!res.includes(s)) res.push(path.join(""));

    return;
  }

  for (let i = 0; i < text.length; i++) {
    if (used[i]) continue;

    used[i] = true;
    path.push(text[i]);

    dfs(text, path, used, res);

    used[i] = false;
    path.pop();
  }
}

findPermutations("aabb");
