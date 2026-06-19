// === LESSON 2b: FUNCTIONS (REUSABLE MACHINES) ===

// 1. Traditional Named Function
function sayHello1(name) {
  return `Hello ${name}`;
}
console.log(sayHello1("Alice"));

// 2. Anonymous Function (Saved inside a variable)
const sayHello2 = function(name) {
  return `Hello ${name}`;
};
console.log(sayHello2("Bob"));

// 3. Arrow Function (The Modern React Standard)
const sayHello3 = (name) => {
  return `Hello ${name}`;
};
console.log(sayHello3("Charlie"));

// 4. Arrow Function WITHOUT parameters (Needs empty parentheses)
const greetClass = () => {
  return "Hello Students!";
};
console.log(greetClass());

// 5. Short Inline Arrow Function (Implicit Return)
// If it fits on one line, remove the brackets {} and the word "return".
const doublePrice = (price) => price * 2;
console.log("Double of 50 is:", doublePrice(50)); // 100
