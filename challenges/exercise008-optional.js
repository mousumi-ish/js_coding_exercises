/* 
	👉 These exercises are a quick practice of some modern JavaScript features.
*/

export function printColours(colours) {
  if (!colours) throw new Error("colour is required");
  const newcolours = [...colours];
  return newcolours;
}

export function shoppingList(list, newItem) {
  if (!list) throw new Error("list is required");
  if (!newItem) throw new Error("newItem is required");
  list.push(...newItem);
  return list;
}

export function highestNumber(numbers) {
  if (!numbers) throw new Error("numbers are required");
  // Your solution using the spread operator here!
}

export function splitThatString(string) {
  if (!string) throw new Error("string is required");
  // Your solution using the spread operator here!
}

// Optional Chaining Bonus activity!

export function addressLookUp(user) {
  if (!user) throw new Error("user is required");
  // Your solution using optional chaining here!
}
