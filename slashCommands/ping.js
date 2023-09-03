const { SlashCommandBuilder } = require('discord.js');

exports.command = {
	name: 'ping',
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Répondre au Ping!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};