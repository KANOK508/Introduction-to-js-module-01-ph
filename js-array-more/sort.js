// ascending
// descending
// js sort function  not work properly---for work this ---we need [  to learn something like ---custom function inside sort function and  using custom comparator.... ]
const numbers = [6, 1, 8, 2, 3, 5];
console.log(numbers);
numbers.sort();
console.log(numbers);
  
const friends = ['sakib', 'nokib', 'akib', 'rakib', 'bakib', 'taaabul']
friends.sort();                                                              /// string sort --depend on the first char
console.log(friends);

console.log(`-------------------------------------------------------------------`)
const ages = [1, 5, 100, 15, 12, 8, 2, 28]
console.log(ages);
ages.sort();
console.log(ages);
console.log(`-------------------------------------------------------------------`)

// ascending 
const sorted_ages = ages.sort(function (a, b) { return a - b })
                
console.log(sorted_ages)

// descending 
const sorted_ages_desc = ages.sort(function (a, b) { return b - a })
console.log(sorted_ages_desc)