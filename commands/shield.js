const { SlashCommandBuilder } = require('@discordjs/builders');

// TODO: set up the shield command

module.exports = {
    data: new SlashCommandBuilder()
        .setName('shield')
        .setDescription('Hide bad stuff.'),
    async execute(interaction) {
        await interaction.reply('Avert your eyes!!');
    },
};