const { SlashCommandBuilder } = require('@discordjs/builders');
const { generalID } = require('../config.json');

const populateProposedMoviesList = () => {
    let proposedMovies = {};

    // get the proposals channel

    // get all messages in the proposals channel

    // iterate through all messages in the channel
    // for each message:
    // for each reaaction:
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
        const generalChannel = interaction.guild.channels.cache.get(generalID);

        await interaction.reply({ content: 'Eventually a cool status message will go here'})
            .catch(console.error);
    },
};