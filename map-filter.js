const numbers = [2, 3, 4, 5, 6, 7, 8];

// for (let i = 0; i < numbers.length; i++) {
//   const element = numbers[i];
//   console.log(element);
// }

// const array = numbers.map(function (element) {
//   return element;
// });
// console.log(array);

const squre = numbers.map(function (element) {
  return element * element;
});
console.log(squre);

const result = numbers.map((x) => x * x * x);
console.log(result);

const smaller = numbers.filter((x) => x < 5);
console.log(smaller);

const singleValue = numbers.find((x) => x < 5);
console.log(singleValue);
