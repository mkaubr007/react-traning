// undefined vs null
let a = 10;
let b = "Hello";
let c = true;
let d = 10.5;
let e = { firstName: "John" };
let f;
let g = null;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);

// == vs ===
let x = 10;
let y = "10";

console.log(x == y); // compare the value
console.log(x === y); // compare the value with type

// turnery operator
let age = 20;
// if (age > 18) {
//   console.log("eligible");
// } else {
//   console.log("not eligible");
// }

/**
 * (condition) ? true statement : false statement
 */

let result = (age > 18) ? 'eligible' : 'noteligible';
console.log(result);