const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    storage: 'database.sqlite'
});

const User = require('./models/User.js')(sequelize, Sequelize.DataTypes);
const Movie = require('./models/Movie.js')(sequelize, Sequelize.DataTypes);
const Proposal = require('./models/Proposal.js')(sequelize, Sequelize.DataTypes);
const Vote = require('./models/Vote.js')(sequelize, Sequelize.DataTypes);

// Set up associations
User.hasMany(Proposal);
Proposal.belongsTo(User);
User.hasMany(Vote);
Vote.belongsTo(User);

// Helpers
// get all proposals for a movie
// get all proposals from a user
// get user's join date
// get all votes from a user

module.exports = { Users: User, Movies: Movie, Proposals: Proposal, Votes: Vote };