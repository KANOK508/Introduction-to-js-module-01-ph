var first = 'Mobarok';
var second = 'Tobarok';

var fullName = first + second;
console.log(fullName);
console.log('40'+2);
// string+ number = string+string
// number - string = number
// string -number = number 

// those strings are number .... at first 


console.log(40-'20');
console.log('50'-10);
// so, with string and number the ( substructin and addition work ---differently...)

var a = isNaN('11');
console.log(a);
var b = isNaN(2-10);
console.log(b);
var c = isNaN(10);
console.log(c);

console.log(isNaN("hello"));     // true
console.log(isNaN(undefined));  // true
console.log(isNaN(0 / 0));      // true

