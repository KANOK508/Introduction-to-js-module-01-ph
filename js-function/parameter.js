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

function vaatKhao() {
    console.log('hand wash kore aso');
    console.log('boso');
    console.log('plate e khabar dhabar nao');
    console.log('gopat gopat kore khao');
}

// vaatKhao();


// 3 --> 3*3 = 9
// 4 --> 4*4 = 16
// 5 --> 5*5 = 25
// 11 --> 11*11 = 121

function square(number) {
    console.log('value of the number parameter', number);
    const borgo = number * number;
    console.log('square of the given number is: ', borgo);
}
square(4);
console.log('--------------')
square(12);
square(5);
square(405);

function add(num1, num2) {
    const sum = num1 + num2;
    console.log(sum);
}

add(5, 71);
add(65, 31);


function addAll(a, b, c, d, e) {
    const total = a + b + c + d + e;
    console.log(a, b, c, d, e);
    console.log(total);
}

addAll(3, 4, 6, 7);
addAll(3, 4, 6, 7, 8);