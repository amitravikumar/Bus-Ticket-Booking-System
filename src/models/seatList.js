const { DataTypes } = require("sequelize");
const travelDB = require("../config/dbconfig");
const busList = require("../models/busList");

const seatLists = travelDB.define("seatmasters", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  busid: {
    type: DataTypes.INTEGER,
    references: {
      model: busList,
      key: "id"
    }
  },
  busName: {
    type: DataTypes.STRING,
    field: "busname"
  },
  seats: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  availability: {
    type: DataTypes.ENUM,
    values: ["yes", "no"],
    allowNull: false
  }
});

module.exports = seatLists;
