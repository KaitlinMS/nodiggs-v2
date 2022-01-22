// TODO: add the status command

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('status')
        .setDescription('Shoe the current vote tally.'),
    async execute(interaction) {
        await interaction.reply('Status goes here!');
    },
};