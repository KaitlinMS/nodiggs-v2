const { SapphireClient } = require('@sapphire/framework');
const { token } = require('../config.json');

const client = new SapphireClient({ intents: [GUILDS, GUILD_MESSAGES, GUILD_MEMBERS, GUILD_MESSAGE_REACTIONS, GUILDS] });

client.login(token);