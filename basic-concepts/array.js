// array

// ++++++++++++++++++++++++++++++++++++++++++ PART-1 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)    // Adds in the end of the array
// myArr.pop()  // Removes from the end of the array

// myArr.unshift(9) // Adds in the starting of the array
// myArr.shift()    // Removes from the starting of the array

// console.log(myArr.includes(9));  // Returns true false value
// console.log(myArr.indexOf(3));  // Return -1 if num not found in the array

// const newArr = myArr.join()  // CONVERTS INTO STRING

// console.log(myArr);  //[0,1,2,3,4,5]
// console.log( newArr);    //0,1,2,3,4,5

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);
// Slice doesnot change the original array
console.log(myn1); // [1,2]
console.log("B ", myArr); //[0,1,2,3,4,5]

const myn2 = myArr.splice(1, 3);
// Splice: Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// Returns: An array containing the elements that were deleted
// It changes the original array by deleting the given indexes to delete
console.log("C ", myArr); //[0,4,5]
console.log(myn2); // [1,2,3]

// ++++++++++++++++++++++++++++++++++++++++++ PART-2 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const marvel_heroes = ["thor", "Ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);   // ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes)   // ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]
// console.log(allHeroes);

// Push changes the original array but the concat doesn't. Concat returns the concatenated result into a new array variable

// To change the original array by adding all the second array elements, we use spread operator.
const all_new_heroes = [...marvel_heroes, ...dc_heroes];

// console.log(all_new_heroes);  // ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh")); // Creates an array from an iterable object.
console.log(Array.from({ name: "hitesh" })); // interesting //[]

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Returns a new array from a set of elements.
