const { SlashCommandBuilder } = require("@discordjs/builders");
const { lieutenantID } = require('../config.json');
const Movie = require('/models/movie');
const User = require('/models/user');
const Proposal = require('/models/proposal');

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

            let channels = await getChannels(old_vote_categories);

            // Get all the messages from the channels we just got
            let allMessages = [];

            for(let i = 0; i < channels.length; i++) {
                let channelMessages = await getMessagesFromChannel(channels[i]);

                channelMessages.forEach(message => {
                    allMessages.push(message);
                });
            }

            // Start extracting the data from the messages we got
            // TODO: Set the created_at date to be the date of the message
            for(let i = 0; i < allMessages.length; i++) {
                let movie_name = allMessages[i].content;
                let proposer = allMessages[i].author.username + '#' + allMessages[i].author.discriminator;

                let [movie, mCreated] = await Movie.findOrCreate({
                    where: {
                        movieName: movie_name
                    }
                });

                let [user, uCreated] = await User.findOrCreate({
                    where: {
                        userName: proposer
                    }
                });

                console.log("USER ID");
                console.log(user.id);
                console.log("MOVIE ID");
                console.log(movie.id);

                console.log("WRITING PROPOSAL RECORD");
                let proposal = await Proposal.create({
                    userId: user.id,
                    movieId: movie.id,
                    removed: false
                });

                console.log(proposal.toJSON());
                console.log();
            }
        }
    }
}