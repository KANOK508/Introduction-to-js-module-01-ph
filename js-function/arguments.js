/*
Parameter vs Argument (in JavaScript)
🧩 Parameter

A parameter is a variable listed in a function definition.
It’s like a placeholder that waits for a value.

function greet(name) {
  console.log("Hello " + name);
}


👉 Here, name is a parameter
Think: “I’m expecting something.”

📦 Argument

An argument is the actual value you pass to the function when calling it.

greet("Alice");


👉 "Alice" is an argument
Think: “Here’s the real value.”

🧠 Simple Memory Trick

Parameter = definition side
Argument = calling side

*/

function doubleIt (number){
    const doubled = number * 2;
    console.log(number, doubled);
}

console.log('I will call the function')
doubleIt(15);
console.log('------------------');
doubleIt(88);
console.log('-----------------');
doubleIt(873);
const number = 55;
doubleIt(number);
const money = 112;
doubleIt(money);


// 
function difference (num1, num2){
    const diff = num1 - num2;
    console.log(num1, num2, 'difference is', diff);
}
const fatherAge = 40;
const myAge = 10;

difference(fatherAge, myAge);