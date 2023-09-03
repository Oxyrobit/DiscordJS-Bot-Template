const { SlashCommandBuilder } = require('discord.js');

exports.command = {
    name: 'exemple',
    data: new SlashCommandBuilder()
        .setName('exemple')
        .setDescription('Commande d\'exemple'),
    async execute(interaction) {
        await interaction.reply('Ceci est une commande d\'exemple');
    },
};