const friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam'];
console.log(friends);

//  .shift()     ----- 
friends.shift();
console.log(friends);
//  .shift()     ----- 
friends.unshift('ghumailam')
console.log(friends)

/*

In JavaScript, shift() and unshift() are array methods that work on the start (index 0) of an array.

shift()

👉 Removes the first element of an array
👉 Returns the removed element
👉 Changes the original array

let arr = [1, 2, 3];

let first = arr.shift();

console.log(first); // 1
console.log(arr);   // [2, 3]

unshift()

👉 Adds one or more elements to the beginning of an array
👉 Returns the new length of the array
👉 Changes the original array

let arr = [2, 3];

let newLength = arr.unshift(1);

console.log(newLength); // 3
console.log(arr);       // [1, 2, 3]


You can add multiple items too:

arr.unshift(-1, 0);
// [-1, 0, 1, 2, 3]

Quick comparison (easy to remember)
Method	What it does	Works on
shift()	Remove first element	Start
unshift()	Add element(s) to start	Start
pop()	Remove last element	End
push()	Add element(s) to end	End

💡 Performance note:
shift() and unshift() are slower on large arrays because all elements have to be re-indexed.

*/