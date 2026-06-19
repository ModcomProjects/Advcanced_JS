// === LESSON 1c: ARITHMETIC OPERATORS ===
// How we calculate math and join strings together.

const itemPrice = 200;
const deliveryFee = 15;
const discountAmount = 30;

// 1. Basic Math (+, -, *, /)
const subTotal = itemPrice + deliveryFee; // Addition: 215
const finalPrice = subTotal - discountAmount; // Subtraction: 185
const halfPrice = itemPrice / 2; // Division: 100

// 2. String Concatenation vs. Modern Template Literals
const firstName = "John";
const lastName = "Doe";

// Old Way (Concatenation with +)
const oldGreeting = "Hello " + firstName + " " + lastName + "!"; 

// New Way (Template Literals using Backticks `` and ${} )
const modernGreeting = `Hello ${firstName} ${lastName}!`; 

// ⚛️ REACT CONNECTION:
// In React layouts, we use template literals constantly to create dynamic 
// styles or class names, like: `btn-style-${themeColor}`

console.log("Final Cart Total:", finalPrice);
console.log(modernGreeting);
