require('dotenv').config();

const axios = require('axios');
const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');

const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
});

client.login(process.env.CLIENT_TOKEN);


client.on('message',  msg => {
    if (msg.content.toLocaleLowerCase() === 'emergency food') {
        msg.reply('Ehe te nandayo!!!!!')
    }
});

