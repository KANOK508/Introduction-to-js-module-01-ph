/* 

🔹 null in JavaScript
What it is:

null means “intentional absence of a value”.

You (the programmer) are saying:

“This variable exists, but right now it has nothing.”

Example:
let user = null;
console.log(user); // null

Key points about null:

It is a primitive value

It means empty on purpose

typeof null is a famous JS bug 👇

typeof null // "object"  ❌ (this is a JS mistake kept for compatibility)





🔹 number in JavaScript
What it is:

number is a data type used for all numeric values in JS.

JavaScript does not have int, float, double separately — everything is number.

Examples:
let a = 10;
let b = 3.14;
let c = -5;

typeof a // "number"

Special numeric values:
typeof NaN        // "number" 🤯
typeof Infinity  // "number"
typeof -Infinity // "number"
// 
*/



/* 
//  

Important: null vs number
Comparison:
null == 0     // false
null === 0    // false

But THIS is weird:
null >= 0     // true 😵
null > 0      // false
null == 0     // false


Why?

null becomes 0 in numeric comparison

but NOT in equality (==)

🧪 null with numbers
Number(null) // 0

isNaN(null) // false (because it becomes 0)



 */