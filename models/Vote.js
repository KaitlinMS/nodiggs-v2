module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Vote', {
        removed: {
            type: DataTypes.BOOLEAN,
            'default': false
        },
        isVeto: {
            type: DataTypes.BOOLEAN,
            'default': false
        }
    });
};