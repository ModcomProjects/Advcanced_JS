// === LESSON 1a: DECLARING VARIABLES ===

// 1. "const" (Constant): Use this for values that should NEVER change.
const trainerName = "Teacher Sam";
const maxHoursPerDay = 4;

// 2. "let": Use this ONLY when you know the value will be updated later.
let activeStudentsCount = 3;
activeStudentsCount = 4; // Valid update!

// ❌ Error Example: Un-commenting the line below will crash your code.
// trainerName = "Alex"; // TypeError: Assignment to constant variable.

// ⚛️ REACT CONNECTION:
// In React, we use 'const' for 95% of our code (components, hooks, imports).
// We rarely use 'let' because React tracks dynamic changes using "State" instead.

console.log("Trainer:", trainerName);
console.log("Current Student Count:", activeStudentsCount);
