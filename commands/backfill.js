const { SlashCommandBuilder } = require("@discordjs/builders");
const { lieutenantID } = require('../config.json');

async function getChannels(old_vote_categories) {
    let channels = [];

    old_vote_categories.forEach(category => {
        category.children.forEach(child => {
            channels.push(child);
        });
    });

    return channels;
}

async function getMessagesFromChannel(channel) {
    return channel.messages.fetch().catch(console.error);
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('backfill')
        .setDescription('Backfill the database'),
    async execute(interaction) {
        const lieutenantRole = interaction.member.roles.cache.has(lieutenantID);

        if (!lieutenantRole) {
            await interaction.reply({
                content: "Sorry, you don't have permission to use that command.",
                ephemeral: true
            });
        } else {
            // Start back filling!

            // Find the categories that start with "Old"
            let categories = await interaction.guild.channels.fetch()
                .then(channels => channels.filter(channel => channel.type === 'GUILD_CATEGORY'))
                .catch(console.error);

            let old_vote_categories = categories.filter(category => category.name.includes('Old'));

            console.log('CATEGORIES:');
            old_vote_categories.forEach(category => console.log(category.name));

            let channels = await getChannels(old_vote_categories);
            console.log('CHANNELS:');
            channels.forEach(channel => console.log(channel.name));


            // Get all the messages from the channels we just got
            let allMessages = [];

            console.log('START');
            for(let i = 0; i < channels.length; i++) {
                let channelMessages = await getMessagesFromChannel(channels[i]);

                channelMessages.forEach(message => {
                    allMessages.push(message);
                })
            }
        }
    }
}