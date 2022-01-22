// TODO: Set up the decide command

// TODO: movies that make it to the final vote but don't end up winning get an extra robo-vote the next time it makes it
// https://discord.com/channels/693562969472368761/759193421390151691/802236548971495424

// TODO: announce the time of the movie
// https://discord.com/channels/693562969472368761/759193421390151691/919027941210480640

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('decide')
        .setDescription('Decides the winning movie.'),
    async execute(interaction) {
        await interaction.reply('Winner goes here!');
    },
};