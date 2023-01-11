// NOTE: you can run 'node db-init.js to create fresh tables

const sequelize = require('./config/database');
const User = require('./models/user');
const Movie = require('./models/movie');
const Proposal = require('./models/proposal');
const Vote = require('./models/vote');

// Define associations
User.hasMany(Proposal);
Proposal.belongsTo(User);
User.hasMany(Vote);
Vote.belongsTo(User);
Movie.hasMany(Proposal);
Proposal.belongsTo(Movie);
Proposal.hasMany(Vote);
Vote.belongsTo(Proposal);

// Save changes to the database
sequelize.sync({ force: true }).then(async () => {
    console.log("All models were synchronized successfully.");
}).catch(console.error);
