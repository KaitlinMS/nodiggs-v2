// TODO: create the preview command, which displays gifs from a randomly selected proposed movie.
// Should only be usable in #operations.
// Apparently we also support the command 'gif'!

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('preview')
        .setDescription('Build a gif preview.'),
    async execute(interaction) {
        await interaction.reply('Preview goes here!');
    },
};