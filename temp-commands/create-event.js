// TODO: allow bot to create a discord event for movie night details

// TODO: update event with proposal channel info

// TODO: bot asks for votes on the best day for movie night, then updates the event appropriately

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('create event')
        .setDescription('Creates an event.'),
    async execute(interaction) {
        await interaction.reply('Create event goes here!');
    },
};