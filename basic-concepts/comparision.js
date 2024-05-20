// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
// == works differently from the >,<,<=,>=.
// null is being converted into 0 so we are getting the true value in the third one
// But == has different concept so it wont result in true.

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// ===

console.log("2" === 2); // false
