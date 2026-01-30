const numbers = [1, 2, 3, 4, 5];


const reversed = [];
// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
//     reversed.unshift(numbers[i]);
// }

for(let i = numbers.length-1; i>=0; i--){
    reversed.push(numbers[i]);
}

console.log(reversed)
for(const num of numbers)
    reversed.unshift(num);       // unshift → add (push) element(s) at the BEGINNING

     // unshift → add (push) element(s) at the BEGINNING
// push    → add element(s) at the END

// shift   → remove (pop) the FIRST element
// pop     → remove the LAST element

// One-line memory trick 🚀
// push / pop → END
// unshift / shift → BEGINNING


/*
👉 In JavaScript arrays, there is NO method called remove()
Only pop(), shift(), splice(), filter(), etc.


-----------------------------------------------------------------------------------------
pop()

Removes the last element of an array-----Modifies the original array-------Returns the removed element (so, we can store that value)

Time Complexity: O(1)
arr.pop();
--------------------
shift()

Removes the first element of an array---Modifies the original array----Returns the removed element

Time Complexity: O(n) (elements shift left)
arr.shift();

--------------------------------------------
splice()

Used to add, remove, or replace elements at a specific index------Modifies the original array-------Returns an array of removed elements

Time Complexity: O(n)
arr.splice(startIndex, deleteCount);
let arr = [10, 20, 30];

arr.pop();   // removes LAST element
// arr → [10, 20]


===================================================================
remove — just a concept / generic word---- there have (in js ) some function for remove an element from ... 


1️⃣ Remove by index →                           splice()
let arr = [10, 20, 30, 40];
arr.splice(1, 1);   // remove 1 element at index 1
// arr → [10, 30, 40]

2️⃣ Remove by condition →                         filter()
let arr = [10, 20, 30];
arr = arr.filter(x => x !== 20);
// arr → [10, 30]

3️⃣ Remove first element → shift()
arr.shift();   // removes first element

🔑 Core difference (important for exams / interviews)
Term	Meaning
pop()	Specific JS method → removes last element
remove	General word → can mean delete by any method
Simple rule to remember 🧠

pop / shift / splice → actual JS functions

remove → human language, not JavaScri



*/

console.log(numbers);
const result = numbers.reverse();   // Array is MUTABLE --so, this  reverse() function--also  must be the orginal changed......... 

// so,----------now result and numbers are SAME.........
console.log(numbers);
console.log(result);

// console.log(reversed);