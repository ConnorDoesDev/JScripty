'use strict';

const Discord = require('discord.js');
const config = require('./config');

const client = new Discord.Client();
const prefix = config.prefix


client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === prefix + 'ping') {
        message.channel.send('Loading data').then (async (msg) =>{
            msg.delete()
            message.channel.send(`🏓Latency is ${msg.createdTimestamp - message.createdTimestamp}ms.\nAPI Latency is ${Math.round(client.ws.ping)}ms`);
        })
    }
});

client.on('message', message => {
    if (message.content === prefix + 'embed') {
        const e = new Discord.MessageEmbed()
            .setDescription(`Test embed`)
        message.channel.send(e)
    }
});

client.login(config.token);