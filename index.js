'use strict';

const Discord = require('discord.js');

const client = new Discord.Client();


client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.channel.send('Loading data').then (async (msg) =>{
            msg.delete()
            message.channel.send(`🏓Latency is ${msg.createdTimestamp - message.createdTimestamp}ms.\nAPI Latency is ${Math.round(client.ws.ping)}ms`);
        })
    }
});

client.on('message', message => {
    if (message.content === 'embed') {
        const e = new Discord.MessageEmbed()
            .setDescription(`Test embed`)
        message.channel.send(e)
    }
});

client.login('ODM0NzQwNTIyODU2ODczOTg1.YIFSsQ.MsZSYoyk0Wf_UUyVcrMvcHOFZqs');