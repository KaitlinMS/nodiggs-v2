// TODO: set up the shield command

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('shield')
        .setDescription('Hide bad stuff.'),
    async execute(interaction) {
        await interaction.reply('Shield goes here!');
    },
};