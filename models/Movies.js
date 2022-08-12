module.exports = (sequelize, DataTypes) => {
    return sequelize.define('movies', {
        movie_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        movie_name: {
            type: DataTypes.STRING
        }
    });
};