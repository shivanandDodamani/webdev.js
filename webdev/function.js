// function myFunction() {
//     console.log("hello world!");
//     console.log(" :)");
// }

// myFunction();

// function sum(a, b) {
//     sum = a + b;
//     return sum;
// }

// console.log(sum(10, 20));

// function sum(a, b) {
//     return a + b;
// }
// const arrowSum = (a, b) => {
//     console.log(a+b);
// }
// function mul(a, b) {
//     return a * b;
// }

// const arrowMul = (a, b) => {
//     console.log(a*b);
// }

// function countVowels(str) {
//     let count = 0;
//     for(let char of str) {
//         if(char === "a" || char === "e" || char === "i" || char === "u") {
//             count++;
//         }
//     }
//     console.log(count);
// }

// const arrowvow = (str) => {
//      let count = 0;
//     for(let char of str) {
//         if(char === "a" || char === "e" || char === "i" || char === "u") {
//             count++;
//         }
//     }
//     console.log(count);
// }
// let arr = ["shiv", "ram", "shiva"];

// arr.forEach((val, idx) => {
//     console.log(val.toUpperCase(), idx);
// });

// let num = [12, 35, 56, 75, 90, 75];

// let newArr = num.map((val) => {
//     return val*val;
// });

// console.log(newArr);

// num.forEach((square) => {
//     console.log(square*square);
// });

// let newArr = num.filter((val) => {
//     return val % 2 === 0;
// });
// console.log( newArr);

let num = [1, 2, 3, 4, 5];

const output = num.reduce((prev, curr) => {
    return prev > curr ? prev: curr;
});
console.log(output)



