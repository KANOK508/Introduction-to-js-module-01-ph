var orangePrice = 20;
var chocolate = 0.5;
// var applePrice = parseInt('22.5');
var applePrice = parseFloat('22.5');

var examMark = parseInt('ami300 parichi');
// when we use parseInt ---- the data type is set to number 
let assMark = parseFloat(40);
console.log(assMark);
console.log(typeof examMark);
console.log(examMark);
// console.log(orangePrice);
// console.log(applePrice);
// console.log(orangePrice + applePrice);

var first = 0.1;
var second = 0.2;
var total = first + second;
console.log(total.toFixed(1))
//  variableName.toFixed(how many number we want after dot....)

const num = -50 / 0;  //        -Infinity

console.log(num);

let check = parseInt(" 20 hell0");    // the 20 is converted to int value
console.log( check); // 20
