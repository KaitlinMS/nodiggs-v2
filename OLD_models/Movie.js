module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Movie', {
        movieName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};