//...Truthy....
//"value", -1, value, true, "false"
/*...FAlsy..
''
null
undefined
NaN
0
false
*/
let name = 0;

if (name || name == 0) {
  console.log("true");
} else {
  console.log("false");
}
