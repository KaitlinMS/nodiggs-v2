// TODO: Add the shortlist command
// Should only be available in #operations

// TODO: lock proposals after this command is run. No last-minute votes.
// https://discord.com/channels/693562969472368761/759193421390151691/787115138368667689

// TODO: option to remove movies that made it to the short list last week
// https://discord.com/channels/693562969472368761/759193421390151691/802333191779385385

// TODO: option to count how many times a unique person added an emoji INSTEAD of what the highest emoji count is
// https://discord.com/channels/693562969472368761/759193421390151691/932366114762137670

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('shortlist')
        .setDescription('Build the list of initial winners.'),
    async execute(interaction) {
        await interaction.reply('Shortlist goes here!');
    },
};