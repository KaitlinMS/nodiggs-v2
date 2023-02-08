module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define(
        'Movie',
        {
            movieName: {
                type: DataTypes.STRING
            }
        }
    );

    Movie.associate = models => {
        Movie.hasMany(models.Proposal);
    };

    return Movie;
};