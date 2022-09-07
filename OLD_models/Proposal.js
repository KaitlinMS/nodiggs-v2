module.exports = (sequelize, DataTypes) => {
        return sequelize.define('Proposal', {
        removed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
};