// let a = 10;
// let b = "20";

// // console.log("a =", a , "b =", b)
// // console.log("a-- =", a--)
// // console.log("a =", a)

// // comparison operators
// a = 10;
// b = "10";
// console.log("10 !== 10", a !== b)

// logical operators
// let a = 10;
// let b = 20;
// let cond1 = a < b;
// let cond2 = a ===100;
// console.log("cond1 !cond2", !(cond1 == cond2))

//conditional statements

// let a = 16;

// // if(a > 18) {
// //     console.log("you can vote")
// // }

// if(a < 18) {
//     console.log("you cannot vote")
// }

// let mode = "blue";
// let color;

// if (mode === "dark") {
//     color = "black";
// }else{
//     color = "white";
// }

// console.log(color)
// let age = 25;
// if(age >= 18) {
//     console.log("vote")
// }else{
//     console.log("not vote")
// }

// let num = 10;
// if (num % 2 === 0) {
//     console.log("even")
// }else{
//     console.log("oddd")
// }
// let name = prompt("hello");
//     console.log(name);
//print 1 to 5
//  for (let i = 1; i <= 5; i++){
//      console.log("i=", i); // runs up to the 5 times
//  }


// // sum of 1 to 5
// let sum = 0; 
// let n = 100;
// for(let i = 0; i <= n; i++){
//     sum = sum + i;   //adds it all
// }   
// console.log("Sum = ", sum);
// console.log("loop ends here");

// let i = 1;
// while(i >= 5){
//     console.log(i);
// }

//for-of loop
// let str = "shivanand"
// size = 0;
// for(let val of str) {
//     console.log("val =", val); //itrator --> prints always char
//     size++
// }
// console.log("String size =", size)  // 9 char

// let student = {
//     name : "shivanand",
//     age : 25,
//     ispass : true,
//     cgpa : 9.5,
// };

// for(let key in student) {
//     console.log("key =", key , "value =", student[key]);
// }


// practise question 1
// let n = 100;
// for(let i = 0; i <=n; i++){
//     if(i%2 === 0){
//         console.log("even =", i)
//     }
// }


// practise question 2
let gameNum = 6;
let userNum = prompt("Guess the correct number ");
 while(userNum != gameNum) {
    userNum = prompt("your Guesed number is wrong, Guess the correct number ");
 }
    console.log("congratulations you guessed the correct number") ;