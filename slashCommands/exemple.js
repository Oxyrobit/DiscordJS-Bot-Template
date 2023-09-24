const { SlashCommandBuilder } = require('discord.js');

const commandName = 'exemple';

exports.command = {
    name: commandName,
    data: new SlashCommandBuilder()
        .setName(commandName)
        .setDescription('Commande d\'exemple'),
    async execute(interaction) {
        await interaction.reply('Ceci est une commande d\'exemple');
    },
};