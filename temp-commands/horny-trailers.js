// TODO: Add a command for horny trailers
// https://discord.com/channels/693562969472368761/759193421390151691/774422538612637757

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('horny trailers')
        .setDescription('Build a trailer, but make it horny.'),
    async execute(interaction) {
        await interaction.reply('Horny trailer goes here!');
    },
};