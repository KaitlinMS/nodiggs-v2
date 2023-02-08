// NOTE: you can run 'node db-init.js to create fresh tables

const sequelize = require('./config/database');
const User = require('./OLD_models/user');
const Movie = require('./OLD_models/movie');
const Proposal = require('./OLD_models/proposal');
const Vote = require('./OLD_models/vote');

// Save changes to the database
sequelize.sync({ force: true }).then(async () => {
    console.log("All OLD_models were synchronized successfully.");
}).catch(console.error);
