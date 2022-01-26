const { SlashCommandBuilder } = require('@discordjs/builders');

let shield = "```\n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n " +
    "   |\\                     /) \n" +
    " /\\_\\\\__               (_//  \n" +
    "|   `>\\-`     _._       //`) \n" +
    " \\ /` \\\\  _.-`:::`-._  //    \n" +
    "  `    \\|`    :::    `|/     \n" +
    "        |     :::     |      \n" +
    "        |.....:::.....|      \n" +
    "        |S H I E L D !|      \n" +
    "        |     :::     |      \n" +
    "        \\     :::     /      \n" +
    "         \\    :::    /       \n" +
    "          `-. ::: .-'        \n" +
    "           //`:::`\\\\         \n" +
    "          //   '   \\\\        \n" +
    "         |/         \\\\       \n" +
    "\n \n \n \n \n \n \n \n \n ```";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('shield')
        .setDescription('Hide bad stuff.'),
    async execute(interaction) {
        await interaction.reply(shield);
    },
};