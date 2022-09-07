const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    storage: 'OLD_database.sqlite'
});

const User = require('./models/user')(sequelize, Sequelize.DataTypes);
const Movie = require('./models/movie')(sequelize, Sequelize.DataTypes);
const Proposal = require('./models/proposal')(sequelize, Sequelize.DataTypes);
const Vote = require('./models/vote')(sequelize, Sequelize.DataTypes);

// Set up associations
User.hasMany(Proposal);
Proposal.belongsTo(User);
Movie.hasMany(Proposal);
Proposal.belongsTo(Movie);
User.hasMany(Vote);
Vote.belongsTo(User);
Proposal.hasMany(Vote);
Vote.belongsTo(Proposal);

// Helpers
// get all proposals for a movie
// get all proposals from a user
// get user's join date
// get all votes from a user

module.exports = { Users: User, Movies: Movie, Proposals: Proposal, Votes: Vote };