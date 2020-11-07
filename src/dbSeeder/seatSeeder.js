const seats = require("../models/seatList");

const seatData = [
  {
    busid: 1,
    busName: "SJT Travels",
    seats: 1,
    availability: "yes"
  }
];

exports.seatSeeder = async (busid, busName) => {
  await seats.sync({ force: true });
  seatData.forEach(async seat => {
    try {
      for (let i = 1; i < 34; i++) {
        try {
          await seats.create({
            busid,
            busName,
            seats: i,
            availability: "yes"
          });
        } catch (e) {
          console.error(e);
        }
      }
    } catch (e) {
      console.error(e);
    }
  });
};
