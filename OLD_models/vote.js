const User = require("./user");
const Proposal = require("./proposal");
module.exports = (sequelize, DataTypes) => {
    const Vote = sequelize.define(
        'Vote',
        {
            removed: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            isVeto: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
        }
    );

    Vote.associate = models => {
        Vote.belongsTo(models.User);
        Vote.belongsTo(models.Proposal);
    };

    return Vote;
};