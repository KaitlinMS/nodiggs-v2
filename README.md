# nodiggs-v2
A JS rewrite of our movie night bot.

# Running the bot locally
You'll need JavaScript and Node set up on your machine. Running `npm install` while in the code's directory will install all the dependencies.

From there, you can run the bot locally using: `node bot.js`

You'll need a `config.json` file in this directory where you can add the bot's token, clientID and guildID. This is not committed to GitHub for security purposes.

# Setting Up the Database
On the first run, you'll need to initialize the database using `node db-init.js --force`. Note that this will completely destroy any existing database and rebuild it.

# Adding New Commands
After adding a new command, you'll need to run `node deploy-commands.js`. This registers the commands with Discord. Be sure to restart the bot if it was already running. Commands are typically available immediately after restarting the bot.