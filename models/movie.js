const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const Movie = sequelize.define('Movie', {
    movieName: {
        type: DataTypes.STRING
    }
});

module.exports = Movie;