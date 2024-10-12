export default function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}

const set = new Set([1, 2, 3, 4, 5]);
const array = [2, 3, 5];

hasValuesFromArray(set, array);
