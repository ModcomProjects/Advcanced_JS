// === LESSON 2a: CONDITIONALS (IF/ELSE vs. SHORTCUTS) ===

const isLoggedIn = true;
const cartCount = 0;

// 1. Standard If / Else (The traditional way)
if (isLoggedIn) {
  console.log("Show the logout button.");
} else {
  console.log("Show the login button.");
}

// 2. The Ternary Operator (The React Shortcut)
// Syntax: condition ? true_result : false_result
const buttonText = isLoggedIn ? "Log Out" : "Log In";
console.log("Ternary Result:", buttonText);

// 3. The Logical AND Short-Circuit (&&)
// If the left side is true, show the right side. If false, show nothing.
const showAlert = isLoggedIn && "Welcome Back!";
console.log("Alert Result:", showAlert); // Welcome Back!

// If left is false, it prints false and skips the message
const showBadge = (cartCount > 0) && `Cart has ${cartCount} items`;
console.log("Badge Result:", showBadge); // false
