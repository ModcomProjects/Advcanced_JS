# 🚀 JavaScript for React

Welcome to the **JavaScript for React** masterclass repository! This course is a highly focused, 8-hour training blueprint designed to strip away old JavaScript fluff and master the exact modern ES6+ concepts required to build production-ready React applications.

---

## 🎯 Course Objectives
By the end of this 2-day boot camp, you will be able to:
- Declare variables safely using modern scope constraints (`const` vs. `let`).
- Package, nest, and unpack API payload structures using modern **Destructuring**.
- Write React-ready layout logic using **Ternary Operators** and **Short-Circuit (`&&`)** shortcuts.
- Master **Arrow Functions** with both implicit and explicit return scopes.
- Manipulate server data streams non-destructively using `.map()` and `.filter()`.
- Synchronize network resources inside asynchronous data engines (`async/await`).

---

## 📅 Folder & File Structure

This repository is organized into chronological step-by-step code lessons. Each file builds directly on top of the previous one:

### 📁 DAY 1: Foundations, Operators & Containers
- `lesson1a.js` — Variable scoping regulations (`const` vs. `let`).
- `lesson1b.js` — Primitive Data Types & structural type evaluation with `typeof`.
- `lesson1c.js` — Arithmetic Operators & dynamic text generation using Template Literals.
- `lesson1d.js` — Structural Data Architecture (Objects, Arrays, and Arrays of Objects).
- `lesson1e.js` — Destructuring and sequence unpacking patterns for Objects and Arrays.

### 📁 DAY 2: Logic, Functions, Loops & API Flow
- `lesson2a.js` — Control Flow shortcuts: Ternary layouts and Logical AND (`&&`) filters.
- `lesson2b.js` — Function Architectures: Traditional, Anonymous, and modern Arrow Functions.
- `lesson2c.js` — Advanced Data Pipelines: Non-destructive loops with `.map()` and `.filter()`.
- `lesson2d.js` — Asynchronous Operations: Consuming live REST API data with `async/await`.

---


##  Practice Assignments

### DAY 1 ASSIGNMENTS

### 🔹 Assignment 1a (Variables)
**Task:** Create a script that tracks a restaurant order.
1. Declare a variable for the restaurant name. It should never change.
2. Declare a variable for the total bill amount. Start it at `0`.
3. Update the bill amount to `25`.
4. Log both variables to the console.

### 🔹 Assignment 1b (Objects)
**Task:** Create a product database record.
1. Create an object named `smartWatch`.
2. Give it the following keys: `brand` (string), `price` (number), and `inStock` (boolean).
3. Change the `inStock` value to the opposite boolean.
4. Log the updated object.

### 🔹 Assignment 1c (Arithmetic & Templates)
**Task:** Calculate a discount message.
1. Create a variable for `originalPrice` set to `100`.
2. Create a variable for `discount` set to `20`.
3. Calculate the `finalPrice` using subtraction.
4. Create a message using backticks (template literals) that prints: `"The final price of the item is $X!"` (Replace X with your calculated variable).

### 🔹 Assignment 1d (Arrays of Objects)
**Task:** Structure a simple playlist.
1. Create an array called `playlist`.
2. Put six objects inside the array. Each object represents a song and must have a `title` key and an `artist` key.
3. Log the title of the very first song in the array.
4. Log all the songs' artists and titles to the console.

### 🔹 Assignment 1e (Destructuring)
**Task:** Unpack a movie profile.
1. Copy this object into your code: `const movie = { title: "Inception", year: 2010, rating: 8.8 };`
2. Use object destructuring to extract `title` and `year` in a single line.
3. Log both extracted variables.

---

### 📅 DAY 2 ASSIGNMENTS

### 🔹 Assignment 2a (Conditionals)
**Task:** Build a dark mode toggle logic.
1. Create a boolean variable called `isDarkMode` set to `false`.
2. Use a ternary operator to save either `"black"` or `"white"` into a variable called `backgroundColor`.
3. Use the Logical AND (`&&`) operator to print `"Moon icon visible"` only if `isDarkMode` is true.

### 🔹 Assignment 2b (Functions)
**Task:** Practice different function styles.
1. Write a traditional named function called `addFive` that takes a number parameter and returns that number plus 5.
2. Rewrite that exact logic as an arrow function with an implicit return (one single line, no brackets, no `return` keyword).

### 🔹 Assignment 2c (Map & Filter)
**Task:** Clean up a list of student grades.
1. Copy this array into your code: `const grades = [45, 80, 55, 92, 70];`
2. Use `.filter()` to create a new array called `passingGrades` containing only scores above 60.
3. Use `.map()` on your new `passingGrades` array to add 5 bonus points to every passing student. Log the final array.

### 🔹 Assignment 2d (Async/Await Capstone)
**Task:** Fetch and process a list of online jokes.
1. Write an async arrow function called `getJokeList`.
2. Inside a `try/catch` block, use `fetch` to get data from this URL: `https://appspot.com`
3. Convert the response to JSON.
4. Use object destructuring to extract the `setup` and `punchline` of each joke.

---

## 🎓 Next Steps: Transitioning to React
When you start building React apps, remember how these files connect directly:
- **`lesson1e.js` (Destructuring)** ➡️ Used to read incoming component `props` and extract Hook fields like `const [state, setState] = useState()`.
- **`lesson2a.js` (Conditionals)** ➡️ Used to control what layout UI elements show up or disappear dynamically on screen.
- **`lesson2c.js` (Loops)** ➡️ Used inside layout trees to turn array collections into beautiful HTML element arrays.
