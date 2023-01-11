const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const Proposal = sequelize.define('Proposal', {
    removed: {
        type: DataTypes.BOOLEAN
    }
});

module.exports = Proposal;