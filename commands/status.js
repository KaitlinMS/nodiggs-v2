const { SlashCommandBuilder } = require('@discordjs/builders');
const { generalID, submissionsCategoryID } = require('../config.json');

const populateProposedMoviesList = (interaction) => {
    // get the proposals channel, there will only ever be one channel here, so choosing the first one is safe
    const submissionsChannel = interaction.guild.channels.cache.get(submissionsCategoryID).children.first();

    // get all messages in the proposals channel
    submissionsChannel.messages.fetch({ limit: 100 }).then(proposals => {
        console.log(`Received ${proposals.size} messages`);
        
        // iterate through all messages in the channel
        proposals.forEach(message => {
            console.log(message.content);

            message.reactions.
        })
    })
    
    // for each message:
    // for each reaction:
    // if the current emoji is a poop, set vetoed to true
    // otherwise count the current emoji
    // if the count is more than the current highest number, set it to the current highest
    // and also set the emoji to the current emoji

    // add the movie and its vote count to the list
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('status')
        .setDescription('Show the current vote tally.'),
    async execute(interaction) {
        populateProposedMoviesList(interaction);

        const generalChannel = interaction.guild.channels.cache.get(generalID);

        await interaction.reply({ content: 'Eventually a cool status message will go here'})
            .catch(console.error);
    },
};