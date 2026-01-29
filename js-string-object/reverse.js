const sentence = 'I am learning Web Dev.'
// const result = '.veD beW gninrael ma I';


// web
// bew
// donal
// d
// od
// nod
// anod
// lanod

let reverse = ''
// way 1 --wonderful
for(const letter of sentence){
    // console.log(letter);
    reverse = letter + reverse;
    // the above logic is not similiar to ---    reverse+=letter
}
// console.log(reverse);

// ignore this solution
// the same logic Apply in different way 2 
let rev = ''
for(let i = 0; i <sentence.length; i++){
    // console.log(i);
    // console.log(sentence[i]);
    const letter = sentence[i];
    rev = letter + rev; 
}
// console.log(rev);

                  // shortcut
//  split('')  join('')  --- they are empty sting --------  That separate every character ---- Also add--- every character by character........
const reversed = sentence.split('').reverse().join('');
// A Spcial Process: 
//  as we know --here--we can reverse an array---(in js ) 
/* 
1. split convert the string into -- array
2. Now we --reverse the array -- using reverse funtion --- now join the array---THAT MAKE A STING .. (IN RETURN ) */
console.log(reversed);
// -------------------------------------------------------------
console.log(sentence.split(''))

const newArray = sentence.split('');
console.log(newArray.join(''))