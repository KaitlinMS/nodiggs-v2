module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',
        {
            userName: {
                type: DataTypes.STRING
            }
        }
    );

    User.associate = models => {
        User.hasMany(models.Proposal);
        User.hasMany(models.Vote);
    }

    return User;
};