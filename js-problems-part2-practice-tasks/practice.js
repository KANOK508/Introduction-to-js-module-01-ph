const heights2 = [167, 190, 120, 165, 137];
// const minValue = Math.min(heights2);  // it will not work as ---    
// // Math.min doesn’t accept an array directly. It expects separate numbers, not a single array argument.
// const minValue1 = Math.min(heights2)  // not give the right value --- as...

const minValue = Math.min(...heights2);   //  using  ...  spread operator   // this work only for numbers 
console.log(heights2);
console.log(minValue);



// this system also work for STRING KIND VALUES... 
const heights3 = [167, 190, 120, 165, 137];

let minValueFind =  heights3[0];
for (heigh of heights3){
    if (minValueFind>heigh){
        minValueFind= heigh;
    }
}
console.log (minValueFind);