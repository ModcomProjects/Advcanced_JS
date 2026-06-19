// === LESSON 1d: DATA CONTAINERS ===
// Now we combine primitives and math into collections. This represents API structures.

// 1. OBJECT: Stores a single complex record in key-value pairs
const productItem = {
  id: 4501,
  title: "Wireless Keyboard",
  price: 45,
  isAvailable: true,
};

// Accessing values via Dot Notation (.)
console.log("Product Title:", productItem.title);

// 2. ARRAY: Stores an ordered list of items (starts at index 0)
const shoppingCart = ["Keyboard", "Mouse", "Monitor"];
console.log("First item in cart:", shoppingCart[0]); // Keyboard

// 3. THE REAL WEB SHAPE: An Array containing Objects
const backendApiResponse = [
  { id: 1, title: "Laptop", price: 1200 },
  { id: 2, title: "Mouse", price: 25 },
];

console.log("Second item price from API:", backendApiResponse[1].price); // 25

// const product=backendApiResponse.map((i)=>{
//     console.log(`title: ${i.title} cost:${i.price}`)

// })
