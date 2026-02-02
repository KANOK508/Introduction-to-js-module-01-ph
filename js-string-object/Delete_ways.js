/* 

1️⃣ Delete a property from an object ✅

👉 Use the delete keyword.

Syntax
delete object.property;

or
delete object['property name'];

🔹 Example 1: Delete a normal key
delete person.salary;

console.log(person.salary); // undefined

🔹 Example 2: Delete a key that has space (must use bracket notation)
delete person['fav places'];

console.log(person['fav places']); // undefined

🔹 Example 3: Delete using a variable key (safe & professional)
const keyName = 'profession';
delete person[keyName];

console.log(person.profession); // undefined
--------------------------------------------------------------------------------------

2️⃣ Delete multiple properties
delete person.age;
delete person.married;

3️⃣ Check if a property exists (before / after delete)
Using in
console.log('salary' in person); // false

Using hasOwnProperty
console.log(person.hasOwnProperty('salary')); // false

=================================================================
4️⃣ Can we delete the whole object? 🤔

❌ NO (not directly)
You cannot delete an object created with const.

delete person; // ❌ won't work

✅ Correct ways:
Option A: Set it to null
person = null; // ❌ not allowed if const

Option B: If it was declared with let
let user = { name: 'Rahim' };
user = null; // ✅ object removed logically


=======================================================
5️⃣ Best practice (real projects)

✔ Use delete for removing properties
✔ Use null or {} to clear an object

Clear all properties
for (let key in person) {
  delete person[key];
}


=======================================================

🧠 Quick memory trick
Task	How
Delete property	delete obj.key
Delete space key	delete obj['key name']
------------------------------------------------------
Dynamic key	delete obj[varName]
--------------------------------------------------------------------
Delete whole object	❌ not possible created with const*/


const myObject = {
 a: 1,
 b: 2,
 c: 3
};

for (let prop in myObject) {
 console.log(myObject[prop]);
}

const x = ""
if(!x.length){
console.log("Hey")
}else{
console.log("Hi")
}

// Consider the following code snippet:

const str = "Hello";
str[0] = "h";
str[3] =`k`
//   ====================STRING IS IMMUTABLE IN JS -=------------------------
/* 
                                🔁 String methods ALWAYS return--- new strings---  not change in the main string... 
Method	Mutates original?
toUpperCase()	❌ No
slice()	❌ No
replace()	❌ No
concat()	❌ No
----------------------------------
 let text = "I love JS";
let newText = text.replace("JS", "JavaScript");

console.log(text);     // "I love JS"
console.log(newText);  // "I love JavaScript"


---------------------------------------------------------------------
Quick comparison (important)
Strings (Immutable)
let s = "abc";
s[0] = "x"; // ❌

Arrays (Mutable)-------------------->>>>>>>>>>
let arr = ["a", "b", "c"];
arr[0] = "x"; // ✅




🧩 Interview one-liner

Strings are immutable in JavaScript, meaning their characters cannot be changed directly; any modification creates a new string.We can store that in a new variable ..... 


🔒 Why JavaScript Strings Are Immutable
Short answer (interview):

Strings are immutable to improve performance, memory efficiency, predictability, and security.

--------------------------------------------------------------------
-----------------STRING VS ARRAY (ON MUtable concept)
🔥 Deep Comparison: String vs Array

This is VERY important 👇

🧠 Core Difference Table
Feature                             	String      	Array
                                      ---------       -----------
Type	                                Primitive	    Object
Mutable	                                ❌ No           ✅ Yes
Indexed                                 access	Read-only	Read & Write
Stored as	                                Value	        Reference
Methods mutate original	              ❌ Never	    ⚠️ Some do
Use case	                            Text	        Collections


=========================================================================================

                                                            🔁 Method Behavior (CRITICAL)
String methods (NON-mutating)
let s = "hello";
s.toUpperCase();

console.log(s); // "hello"


✔ Returns a NEW string

Array methods (some mutate)
let arr = [1, 2, 3];
arr.push(4);

console.log(arr); // [1,2,3,4]

⚠️ Dangerous Array Mutations
push()
pop()
shift()
unshift()
splice()
sort()
reverse()


All mutate the original array.
==================================================================================================================

🔄 Convert String ↔ Array (Best practice)
Modify string using array trick
let str = "hello";
let arr = str.split("");
arr[0] = "y";
str = arr.join("");

console.log(str); // "yello"
++++++++++++++++++++++++++++++++++++++++++++++


*/
console.log(str);
// What will be logged to the console?

