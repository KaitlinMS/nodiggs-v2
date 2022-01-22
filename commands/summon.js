const { SlashCommandBuilder } = require('@discordjs/builders');

// TODO: Create the summon command
// TODO: Should only be usable in #operations or by lieutenants

module.exports = {
    data: new SlashCommandBuilder()
        .setName('summon')
        .setDescription('Sets up the movie proposals channel with your choice of name.')
        .addStringOption(option =>
            option.setName('name')
                .setDescription('The name of the channel')
                .setRequired(true)),
    async execute(interaction) {
        let channelName = interaction.options.getString('name');
            interaction.guild.channels.create(channelName, { reason: 'New channel for movie night voting.' })
                .then(console.log)
                .catch(console.error);
    },
};