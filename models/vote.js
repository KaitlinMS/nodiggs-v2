const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const Vote = sequelize.define('Vote', {
    removed: {
        type: DataTypes.BOOLEAN
    },
    isVeto: {
        type: DataTypes.BOOLEAN
    }
});

module.exports = Vote;