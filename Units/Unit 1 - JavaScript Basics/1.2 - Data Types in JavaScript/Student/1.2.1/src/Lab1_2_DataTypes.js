/* 
 Lab 002 – Data Types in JavaScript
*/

// TODO 1: Create variables age (34) and price (12.99), print both
// TODO 1b: Divide "Sandra" by 2 and print result (expect NaN)

let age= 34;
let price= 12.99;

console.log (`Age: ${age}`);
console.log ("Price: " + price);

// TODO 2: Print basic math ops: + - * /

let x = 10;
let y = 4;

console.log("Addition:", x + y);
console.log("Subtraction:", x - y);
console.log("Multiplication:", x * y);
console.log("Division:", x / y);

// TODO 2b: Use exponentiation (2 ** 3) and modulo (7 % 2)

console.log("Exponentiation (2 ** 3):", 2 ** 3);
console.log("Modulo (7 % 2):", 7 % 2);

// TODO 3: Assignment operators with score variable

let score = 10;
score += 5; 
score -= 3;  
score *= 2;  
score /= 4;  
console.log("Final score:", score);

// TODO 4: Expressions with operator precedence

// TODO 5: Strings (single, double, backticks)

// TODO 6: String properties and methods
let greetings= "Hello There!";
// - greeting.length
console.log("Greeting length: " + greetings.length)
// - charAt(0), charAt(5), [3]
console.log("CharAT(0) ", greetings.charAt(0))
console.log("CharAT(0) ", greetings.charAt(5))
console.log("[3]", greetng [3])
// - indexOf("sad")
let phrase= "Don't be sad, be happy!";
console.log("index of sad", phrase.indexOf("sad"))
// - repeat()
console.log("la".repeat(5))
// - substring, substr, slice examples
console.log("substring ", phrase.substring(0,3))
console.log("substr() ", phrase.substr(0,3))
console.log("slice ", phrase.slice(-23,-20))
// 🚀 Stretch Goals
// - Even number check using %
for(let i=1; <10, i++) {

if (i % 2 == 0) {
    console.log('the answer is ${i} is even')


}

}
// - localeCompare() example