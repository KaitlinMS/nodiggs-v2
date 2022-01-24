const { SlashCommandBuilder } = require('@discordjs/builders');
const { generalID } = require('../config.json');

// TODO: Should only be usable by lieutenants

module.exports = {
    data: new SlashCommandBuilder()
        .setName('summon')
        .setDescription('Sets up the movie proposals channel with your choice of name.')
        .addStringOption(option =>
            option.setName('name')
                .setDescription('The name of the channel')
                .setRequired(true)),
    // TODO: make sure channel names have spaces replaced with dashes
    async execute(interaction) {
        const generalChannel = interaction.guild.channels.fetch(generalID);
        console.log(generalChannel);

        const channelName = interaction.options.getString('name');
            interaction.guild.channels.create(channelName, { reason: 'New channel for movie night voting.' })
                .then(await interaction.reply({ content: `Successfully created ${channelName}!`, ephemeral: true }))
                .then(await generalChannel.send(`>>----- 🦂 it's movie night!! 🦂 -----<<\nsubmit movies in ${channelName}!\nsee {0.mention} for literature on The System™️`))
                .catch(console.error);

            // TODO: Announce the new channel. This currently isn't working.
    },
};