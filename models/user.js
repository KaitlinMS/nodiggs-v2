const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const User = sequelize.define('User', {
    userName: {
        type: DataTypes.STRING
    }
});

module.exports = User;