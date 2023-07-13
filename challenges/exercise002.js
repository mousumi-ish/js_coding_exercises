export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city === "Manchester";
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  const peopleInOneBus = 40;
  return Math.ceil(people / peopleInOneBus);
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  let animalInFarm = "sheep";
  return arr.filter((animalInFarm) => animalInFarm === "sheep").length;
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  return (
    person.address.postCode.charAt(0) === "M" &&
    person.address.city === "Manchester"
  );
}
