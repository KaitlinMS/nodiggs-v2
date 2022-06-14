const { SlashCommandBuilder } = require('@discordjs/builders');
const { generalID, lieutenantID, submissionsCategoryID, introID } = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('summon')
        .setDescription('Sets up the movie proposals channel with your choice of name.')
        .addStringOption(option =>
            option.setName('name')
                .setDescription('The name of the channel')
                .setRequired(true)),

    async execute(interaction) {
        const lieutenantRole = interaction.member.roles.cache.has(lieutenantID);

        if (!lieutenantRole) {
            await interaction.reply({ content: "Sorry, you don't have permission to use that command.", ephemeral: true})

        } else {
            const category = interaction.guild.channels.cache.get(submissionsCategoryID);
            const generalChannel = interaction.guild.channels.cache.get(generalID);
            let channelName = interaction.options.getString('name');
            channelName = channelName.replace(/\s/g, '-');

            interaction.guild.channels.create(channelName, { reason: 'New channel for movie night voting.', topic: 'Submit your movies here!', parent: category })
                .then(await interaction.reply({ content: `Successfully created ${channelName}!`, ephemeral: true }))
                .catch(console.error);

            const newChannel = interaction.guild.channels.cache.find(channel => channel.name === channelName);

            await generalChannel.send(`>>----- 🦂 it's movie night!! 🦂 -----<<\nsubmit movies in ${newChannel}!\nsee <#${introID}> for literature on The System™`);
        }
    },
};