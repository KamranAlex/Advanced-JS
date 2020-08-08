//1
let name;
console.log(name); //undefined

//2
function add(x, y) {
  console.log(x + y);
  return;
}
const result1 = add(5, 10);
console.log(result1); //undefined

//3
function add(x, y) {
  console.log(y); // undefined
}
const result2 = add(10);
console.log(result2); //undefined

//4
const student = { name: "rahim", id: 15 };
console.log(student.address); //undefined

//5
//null is empty
