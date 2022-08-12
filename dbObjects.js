const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    storage: 'database.sqlite'
});

const Users = require('./models/Users.js')(sequelize, Sequelize.DataTypes);
const Movies = require('./models/Movies.js')(sequelize, Sequelize.DataTypes);
const Proposals = require('./models/Proposals.js')(sequelize, Sequelize.DataTypes);
const Votes = require('./models/Votes.js')(sequelize, Sequelize.DataTypes);

// Set up associations
Proposals.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });
Proposals.belongsTo(Movies, { foreignKey: 'movie_id', as: 'movie' });
Votes.belongsTo(Proposals, { foreignKey: 'proposal_id', as: 'proposal' });
Votes.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });

// Helpers
// get all proposals for a movie
// get all proposals from a user
// get user's join date
// get all votes from a user

module.exports = { Users, Movies, Proposals, Votes };