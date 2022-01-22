// TODO: set up the help command

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('get help'),
    async execute(interaction) {
        await interaction.reply('Help goes here!');
    },
};