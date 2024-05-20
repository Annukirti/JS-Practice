const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// this.username will be undefined here. This keyword contains global instance

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// this.username will be undefined here as well. This keyword contains global instance

const chai = () => {
  let username = "hitesh";
  console.log(this);
};
// this will be empty in arrow function always

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } // 7

// const addTwo = (num1, num2) =>  num1 + num2          // 7

// const addTwo = (num1, num2) => ( num1 + num2 )       // 7

const addTwo = (num1, num2) => ({ username: "hitesh" });

console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// 1 Use of arrow func
// myArray.forEach(()=>{})
