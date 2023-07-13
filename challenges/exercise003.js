export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map((num) => Math.pow(num, 2));
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let camelCaseWord = words[0];
  for (
    let i = 1;
    i < words.length;
    (camelCaseWord += words[i].charAt(0).toUpperCase() + words[i].slice(1)) &&
    i++
  );
  return camelCaseWord;
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let count = 0;
  people.forEach((person) => (count += person.subjects.length));
  return count;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let count = 0;
  for (let item of menu) {
    if (item.ingredients.includes(ingredient)) count++;
  }
  return count > 0;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++)
    for (
      let j = 0;
      j < arr2.length;
      arr1[i] === arr2[j++] && arr3.push(arr1[i])
    );
  return [...new Set(arr3)].sort();
}
