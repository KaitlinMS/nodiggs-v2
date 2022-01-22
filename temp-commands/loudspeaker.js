// TODO: Set up the loudspeaker command.
// Should only be usable in the #operations.
// I think this can use an "ephemeral" tag somewhere to make it invisible to people.

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('loudspeaker')
        .setDescription('Make the bot say something.'),
    async execute(interaction) {
        await interaction.reply('Message goes here!');
    },
};