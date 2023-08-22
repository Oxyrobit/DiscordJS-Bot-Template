const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Répondre au Ping!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};