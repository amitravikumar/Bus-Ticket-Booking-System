const users = require("../models/userList");

const userData = [
  {
    firstName: "Ashok",
    lastName: "Kumar",
    age: 26,
    email: "ashokkumar@gmail.com",
    city: "Tirunelveli",
    gender: "male"
  },
  {
    firstName: "Siva",
    lastName: "Kumar",
    age: 29,
    email: "sivakumar@gmail.com",
    city: "Adyar",
    gender: "male"
  },
  {
    firstName: "Raj",
    lastName: "Kumar",
    age: 21,
    email: "rajkumar@gmail.com",
    city: "Madurai",
    gender: "male"
  }
];

const userSeeder = async () => {
  await users.sync({ force: true });
  userData.forEach(async bus => {
    try {
      const result = await users.create(bus);
      console.log(result.get());
    } catch (e) {
      console.error(e);
    }
  });
};

userSeeder();
