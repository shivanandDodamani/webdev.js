// let names = ["shivanand", "shrirang", "vijay", "shiv"];

// for(let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// let marks = [85, 97, 44, 36, 76, 60];
// let sum = 0;
// for(let i = 0; i < marks.length; i++) {
//     sum+=marks[i];   
// }
// let avg = sum/marks.length;
// console.log("avarage = ", avg)

let price =  [250, 625, 300, 900, 50];
let i = 0;

for ( let val of price) {
    console.log("value of ", val);
    let offer = val/10;
    console.log("offer of ", val, " is ", offer);
    i++;
}



