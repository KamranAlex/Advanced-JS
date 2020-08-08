const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const part1 = numbers.slice(1, 4);
// console.log(part1);

const remove = numbers.splice(2, 4);
// console.log(remove);
// console.log(numbers);
const attach = numbers.join(", ");
console.log(attach);
