// === LESSON 1e: DESTRUCTURING (UNPACKING DATA) ===
// Pulling data out of containers cleanly without typing the object name repeatedly.

const driverProfile = {
  driverName: "Sarah",
  vehicle: "Tesla Model 3",
  tripsCompleted: 142,
};

// 1. Object Destructuring (Extract matching keys)
const { driverName, vehicle } = driverProfile;

console.log("Driver:", driverName); // Sarah
console.log("Vehicle:", vehicle);   // Tesla Model 3

// 2. Array Destructuring (Extract by order position)
const coordinatePoints = [40.7128, -74.0060]; // Latitude, Longitude

const [lat, lng] = coordinatePoints;

console.log("Latitude:", lat);   // 40.7128
console.log("Longitude:", lng); // -74.0060

// ⚛️ REACT CONNECTION:
// This positional unpacking is how React hooks read dynamic component states:
// const [userInput, setUserInput] = useState("");
