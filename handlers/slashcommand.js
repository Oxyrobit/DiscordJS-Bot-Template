"use strict";
const { REST, Routes } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = async function (client) {
    const slashCommandsDir = path.join(__dirname, '../slashCommands');
    const body = [];
    fs.readdirSync(slashCommandsDir).forEach(file => {
        if (!file.endsWith('.js') || file === 'exemple.js')
            return;
        
        const command = require(path.join(slashCommandsDir, file)).command;
        client.slashCommands.set(command.name, command);
        body.push(command.data.toJSON());
    });
    
    const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
    try {
        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID),
            { body }
        );
        console.log('✅ Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
};