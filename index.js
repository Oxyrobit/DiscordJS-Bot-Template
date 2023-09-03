"use strict";
const dotenv = require("dotenv");
const { Client, Collection, GatewayIntentBits, Options } = require("discord.js");
const path = require("path");
const fs = require("fs");
dotenv.config();

const client = new Client({
    sweepers: {
        ...Options.DefaultSweeperSettings,
        messages: {
            interval: 3600,
            filter: () => message => message.author.id !== client.user.id,
        },
    },
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMembers
      ]
});

client.slashCommands = new Collection();

const handlersDir = path.join(__dirname, './handlers');
fs.readdirSync(handlersDir).forEach(async handler => {
    (await Promise.resolve(`${`${handlersDir}/${handler}`}`).then(s => __importStar(require(s)))).default(client);
});

client.login(process.env.TOKEN);

