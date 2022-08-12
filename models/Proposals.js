module.exports = (sequelize, DataTypes) => {
    return sequelize.define('proposals', {
        proposal_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        user_id: DataTypes.STRING,
        movie_id: DataTypes.INTEGER,
        removed: {
            type: DataTypes.BOOLEAN,
            'default': false
        }
    });
};