module.exports = {
    name: 'messageCreate',
    once: 'false',
    execute(message) {
        // TODO: bot needs to ignore its own messages

        // TODO: matt_firsteenth

        // TODO: gifs for messages containing "alert"

        // TODO: react to messages that are probably aimed at the bot

        // TODO: keep track of proposed movies

        // TODO: check if user has submitted too many movies

        // TODO: check if there are multiple movies in a single submission

        // TODO: automatically add a vote reaction to all new proposals
        // https://discord.com/channels/693562969472368761/759193421390151691/911406396942209074

        console.log(`A message has been created by ${message.author.tag}.`);
    },
};