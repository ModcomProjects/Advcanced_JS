// === LESSON 1b: PRIMITIVE DATA TYPES ===
// Before handling complex data, JS needs to understand basic individual values.

// 1. String (Text data inside quotes)
const courseTitle = "JavaScript for React"; 

// 2. Number (Integers or decimals - no quotes!)
const studentAge = 25;
const productPrice = 99.99;

// 3. Boolean (True or False flags - used for switches)
const isClassOnline = true;
const isServerLoading = false;

// 4. Null & Undefined (Empty placeholders)
let incomingApiData = null; // Intentional empty value (waiting for server data)
let userSelectedColor;     // Undefined (variable exists, but has no value yet)

// Checking types using "typeof"
console.log(typeof courseTitle); // "string"
console.log(typeof productPrice); // "number"
console.log(typeof isClassOnline); // "boolean"
