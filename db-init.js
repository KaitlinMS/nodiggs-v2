// NOTE: you can run 'node db-init.js --force' to create fresh tables

const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: console.log,
    storage: 'OLD_database.sqlite'
});

require('./OLD_models/User.js')(sequelize, Sequelize.DataTypes);
require('./OLD_models/Movie.js')(sequelize, Sequelize.DataTypes);
require('./OLD_models/Proposal.js')(sequelize, Sequelize.DataTypes);
require('./OLD_models/Vote.js')(sequelize, Sequelize.DataTypes);

const force = process.argv.includes('--force') || process.argv.includes('-f');

sequelize.sync({ force }).then(async () => {
    console.log('Database synced.');

    sequelize.close();
}).catch(console.error);