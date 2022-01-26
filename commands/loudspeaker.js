const { SlashCommandBuilder } = require('@discordjs/builders');
const { generalID, lieutenantID } = require('../config.json');

const botSay = (message) => {
    const botBlorps = [
        '***bzzt***',
        '***bzzzzzt***',
        '***beep***',
        '***bleep***',
        '***blorp***',
        '***bleep blorp***',
        '***whistle pop***',
        '***meep***',
        '***morp***',
        '***meep morp***',
        '***beep beep***',
        '***boop***',
        '***bip bip***'];

    randomIndex = Math.floor(Math.random() * botBlorps.length);

    return botBlorps[randomIndex] + '... ' + message;
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('loudspeaker')
        .setDescription('Make the bot say something.')
        .addStringOption(option =>
            option.setName('message')
                .setDescription('What would you like NoDiggs to say?')
                .setRequired(true)),
    async execute(interaction) {
        const lieutenantRole = interaction.member.roles.cache.has(lieutenantID);

        if (!lieutenantRole) {
            await interaction.reply({ content: "Sorry, you don't have permission to use that command.", ephemeral: true})
        } else {
            const generalChannel = interaction.guild.channels.cache.get(generalID);
            const message = interaction.options.getString('message');

            await interaction.reply({ content: 'Sending your message now!', ephemeral: true})
                .then(generalChannel.send(botSay(message)))
                .catch(console.error);
        }
    },
};