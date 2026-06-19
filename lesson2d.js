
const fetchUsers = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const users = await response.json();
    // console.log(users)

    // const smallList = users.filter((user) => user.id <= 35);

    const cleanProfiles = users.map((users) => {
      const { name, email } = users;
      return `Name: ${name} | Email: ${email}`;
    });

    console.log(cleanProfiles);
  } catch (error) {
    console.log("Something went wrong:", error);
  }
};

fetchUsers();

// const fetchJoke = async () => {
//   try {
//     const response = await fetch(
//       "https://official-joke-api.appspot.com/random_joke"
//     );

//     const joke = await response.json();

//     const { setup, punchline } = joke;

//     console.log(setup);
//     console.log(punchline);
//   } catch (error) {
//     console.log("Something went wrong:", error);
//   }
// };

// fetchJoke();
