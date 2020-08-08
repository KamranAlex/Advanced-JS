const student = [
  { id: 21, name: "Abul" },
  { id: 31, name: "Rahim" },
  { id: 41, name: "Karim" },
  { id: 51, name: "Salam" },
];
// const names = [];
// for (let i = 0; i < student.length; i++) {
//   const element = student[i];
//   names.push(element.name);
// }
// console.log(names);

const names = student.map((x) => x.name);
console.log(names);

// const selectedName = student.filter((x) => x.id > 40);
// console.log(selectedName);

const selectedName = student.find((x) => x.id > 40);
console.log(selectedName);
