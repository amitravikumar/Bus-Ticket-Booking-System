const { DataTypes } = require("sequelize");
const travelDB = require("../config/dbconfig");
//const { hash } = require("./utils/hash");

const userList = travelDB.define("usermaster", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: DataTypes.STRING,
    field: "first_name",
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    field: "last_name"
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 15
    }
  },
  gender: {
    type: DataTypes.ENUM,
    values: ["male", "female"],
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  city: {
    type: DataTypes.STRING,
    field: "city"
  }
});

module.exports = userList;
