// NOTE: you can run 'node dbInit.js --force' to create fresh tables

const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    storage: 'database.sqlite'
});

const Users = require('./models/Users.js')(sequelize, Sequelize.DataTypes);
const Movies = require('./models/Movies.js')(sequelize, Sequelize.DataTypes);
require('./models/Proposals.js')(sequelize, Sequelize.DataTypes);
require('./models/Votes.js')(sequelize, Sequelize.DataTypes);

const force = process.argv.includes('--force') || process.argv.includes('-f');

sequelize.sync({ force }).then(async () => {
    const users = [
      Users.upsert({ user_id: "KaitlinMS#5402" })
    ];

    const movies = [
        Movies.upsert({ movie_name: "The Princess Bride" })
    ];

    await Promise.all(users);
    await Promise.all(movies);
    console.log('Database synced.');

    sequelize.close();
}).catch(console.error);