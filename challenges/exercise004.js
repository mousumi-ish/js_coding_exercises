export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter((num) => num < 1);
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter((name) => name.charAt(0) === char);
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return words.filter(
    (word) => word.slice(0, 2) === "to" && word.slice(2, 3) === " "
  );
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter((num) => Number.isInteger(num));
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  let NameOfCities = [];
  users.forEach((user) => NameOfCities.push(user.data.city.displayName));
  return NameOfCities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map((num) => Math.round(Math.sqrt(num) * 100) / 100);
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  return sentences.filter((sentence) => {
    return sentence.toLowerCase().indexOf(str.toLowerCase()) !== -1;
  });
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let longestSides = [];
  for (
    let i = 0;
    i < triangles.length;
    longestSides.push(Math.max(...triangles[i++]))
  );
  return longestSides;
}
