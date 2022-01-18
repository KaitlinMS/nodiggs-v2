// TODO: Create the summon command
// TODO: Should only be usable in #operations or by lieutenants

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('summon')
        .setDescription('Sets up the movie proposals channel with your choice of name.')
        .addStringOption(option =>
            option.setName('channel name')
                .setDescription('The name of the movie night channel. Dashes will replace and spaxes.')
                .setRequired(true)),
    async execute(interaction) {
        let channelName = interaction.options.getString('channel name');

        interaction.bot.guild.channel.create(channelName, 'text');
    },
};