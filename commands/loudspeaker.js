const { SlashCommandBuilder } = require('@discordjs/builders');
const { generalID } = require('../config.json');

// TODO: Should only be usable by lieutenants.

module.exports = {
    data: new SlashCommandBuilder()
        .setName('loudspeaker')
        .setDescription('Make the bot say something.')
        .addStringOption(option =>
            option.setName('message')
                .setDescription('What would you like NoDiggs to say?')
                .setRequired(true)),
    async execute(interaction) {
        const generalChannel = interaction.guild.channels.cache.get(generalID);
        const message = interaction.options.getString('message');

        await interaction.reply({ content: 'Sending your message now!', ephemeral: true})
            .then(generalChannel.send(message))
            .catch(console.error);
    },
};