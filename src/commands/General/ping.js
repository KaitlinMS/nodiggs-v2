const { Command } = require('@sapphire/framework');
const { Formatters } = require('discord.js');
class SlashCommand extends Command {
	constructor(context, options) {
		super(context, {
			...options,
			description: 'Say hello to a user.'
		});
	}
	registerApplicationCommands(registry) {
		registry.registerChatInputCommand((builder) =>
			builder //
				.setName(this.name)
				.setDescription(this.description)
				.addUserOption((option) =>
					option //
						.setName('user')
						.setDescription('User to say hello to')
						.setRequired(true)
				)
		);
	}
	chatInputRun(interaction) {
		const userToGreet = interaction.options.getUser('user', true);
		const userToGreetMention = Formatters.userMention(userToGreet.id);
		const interactionUserMention = Formatters.userMention(interaction.user.id);
		return interaction.reply({
			content: `Hey ${userToGreetMention}, ${interactionUserMention} says hello!`,
			allowedMentions: {
				users: [userToGreet.id, interaction.user.id]
			}
		});
	}
}
module.exports = {
	SlashCommand
};