// TODO: set up the final vote command
// Should only be usable in #operations

// TODO: option to hide how many votes each movie has to prevent strategic voting
// https://discord.com/channels/693562969472368761/759193421390151691/929185990118101052

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('final vote')
        .setDescription('Set up the final vote.'),
    async execute(interaction) {
        await interaction.reply('Final vote goes here!');
    },
};