const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('get help'),
    async execute(interaction) {
        const helpText = "Hi! This is line one!";
        helpText.concat("\nAnd this is line 2!")
        await interaction.reply(helpText);
    },
};