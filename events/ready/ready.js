const { Events }  = require('discord.js')

const event = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Pret: Connecte en tant que ${client.user.tag}`);
	},
};

exports.default = event;
