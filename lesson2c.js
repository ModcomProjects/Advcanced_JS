// === LESSON 2c: MAP AND FILTER (LOOPING WITHOUT FOR-LOOPS) ===

const numbers =[100, 200, 300, 400];

// 1. .map() - Changes every item and gives you a brand new list
// Let's add 5 tax to every number
const pricesWithTax = numbers.map((item) => {
    // console.log(item)
  return item=item+(item * 0.05);
});

console.log("Old List:", numbers);      // [10, 20, 30, 40]
console.log("New Tax List:", pricesWithTax); // [15, 25, 35, 45]


// 2. .filter() - Keeps only items that pass a test
// Let's keep only numbers greater than 25
const bigNumbers = numbers.filter((item) => {
  return item > 25;
});

console.log("Filtered List:", bigNumbers); // [30, 40]



const farmers = [
    { name: "John", phone: "0712345678" },
    { name: "Mary", phone: "0723456789" },
    { name: "Peter", phone: "0734567890" }
];


//filter() → "Keep only the items that pass a test." 
const results = farmers.filter((item) => {
  return item.name.toLowerCase().includes("p");
});

console.log(results);


// find() → "Give me the first matching item."
const resultsw = farmers.find((item) => {
  return item.name === "Mary";
});

console.log(resultsw);
