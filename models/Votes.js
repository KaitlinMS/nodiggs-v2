module.exports = (sequelize, DataTypes) => {
    return sequelize.define('votes', {
        vote_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        user_id: DataTypes.STRING,
        proposal_id: DataTypes.INTEGER,
        removed: {
            type: DataTypes.BOOLEAN,
            'default': false
        },
        is_veto: {
            type: DataTypes.BOOLEAN,
            'default': false
        }
    });
};