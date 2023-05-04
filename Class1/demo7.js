const odd = [1, 3, 5, 7, 9];
const even = [2, 4, 6, 8];

// const combined = [];

// for (let i = 0; i < odd.length; i++) {
//   combined.push(odd[i]);
// }


// for (let i = 0; i < even.length; i++) {
//     combined.push(even[i]);
// }

const combined = [...odd, ...even];

console.log(combined);