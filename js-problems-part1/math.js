// const Math = {
//     min: function min(num1, num2){
//         return num2;
//     }
// }

// console.log(Math.max);

const min = Math.min(45, 21, 65, 99, 126, 5, -99)
console.log(min);
const max = Math.max(45, 21, 65, 99, 126, 5, -99, 987);
console.log(max);

console.log(Math.PI)
console.log(Math.abs(5-10))
console.log(Math.round(2.25))  //  round means---  return an integer which is ---nearby
                             // floor gives --- the  low integer of that fraction number
                              // ceil gives --- the high number of that fraction number 
console.log(Math.round(2.85))
console.log(Math.floor(2.95))
console.log(Math.floor(2.99995))
console.log(Math.ceil(2.99995))
console.log(Math.ceil(2.00001))
console.log(`---------------------------------------------`)

console.log(Math.random())   //  random returns a --fraction value (between 0 to 1 )
                             // for get > 1 ,, multiply the random gettgin value with a INTEGER... 
console.log(Math.random()*10)
const rand = Math.round(Math.random()*10)
console.log(rand)