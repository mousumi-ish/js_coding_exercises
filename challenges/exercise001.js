// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0) + "." + lastName.charAt(0);
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  const vat = originalPrice + (vatRate / 100) * originalPrice;
  return Math.round(vat * 100.0) / 100.0;
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return (
    Math.round((originalPrice - (originalPrice * reduction) / 100) * 100) / 100
  );
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  return str.length % 2 == 0
    ? str.charAt(str.length / 2 - 1) + str.charAt(str.length / 2)
    : str.charAt(str.length / 2);
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  let reverseStr = "";
  for (let i = word.length - 1; i >= 0; reverseStr += word[i--]);
  return reverseStr;
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let reverseWords = [];
  for (let i = 0; i < words.length; reverseWords.push(reverseWord(words[i++])));

  return reverseWords;
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let count = 0;
  for (
    let i = 0;
    i < users.length;
    count += Number(users[i++].type === "Linux")
  );
  return count;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let total = 0;
  for (let i = 0; i < scores.length; total += scores[i++]);
  return Math.round((total / scores.length) * 100) / 100;
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  return n % 3 !== 0 && n % 5
    ? n
    : (n % 3 ? "" : "fizz") + (n % 5 ? "" : "buzz");
}
