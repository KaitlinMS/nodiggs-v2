module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        userName: {
            type: DataTypes.STRING
        }
    });
};