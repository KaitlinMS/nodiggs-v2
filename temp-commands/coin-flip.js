// TODO: set up the coinflip command
// Should only be usable in #operations

// TODO: tell the command which movie is heads and which is tails

// TODO: support for multi-way ties

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('coin flip')
        .setDescription('Initiate a coin flip to choose a winner.'),
    async execute(interaction) {
        await interaction.reply('Coin flip goes here!');
    },
};