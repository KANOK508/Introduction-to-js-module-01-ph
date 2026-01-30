/*
Notes: 

// string is immutable --> not changeable
// array is mutable --> you can change the array elements
// object : 
 */
const country = 'Bangladesh';
const division = "Newkhale";
const district = `B-Baria`;
console.log(typeof district)
console.log(`-----------------------------------`)
const thana = new String('Demra');    
console.log(typeof thana)
console.log(thana);
// // like that we can create object ..

console.log(`-----------------------------------`)


const numbers = [54, 98, 78, 21, 65];
console.log(numbers);
// console.log(numbers.length);
// console.log(numbers[1])
numbers[1] = 11;
console.log(numbers)

// string is immutable --> not changeable
// array is mutable --> you can change the array elements
const capital = 'Dhaka';
console.log(capital.length);
console.log(capital[3]);
console.log(capital , `--------------------`);
capital[0] = 'F';   // that do nothing --as sting is immutable
console.log(capital);