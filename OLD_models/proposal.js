module.exports = (sequelize, DataTypes) => {
    const Proposal = sequelize.define(
        'Proposal',
        {
            removed: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
        }
    );

    Proposal.associate = models => {
        Proposal.belongsTo(models.User);
        Proposal.belongsTo(models.Movie);
        Proposal.hasMany(models.Vote);
    };

    return Proposal;
};