'use strict';

const Discord = require('discord.js');
const config = require('./config');
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const prefix = config.prefix

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    client.user.setPresence( { activity: { type: 'WATCHING', name: 'Myself' }, status: 'online' } )
    console.log('I am ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args, client);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});

//client.on('message', message => {

    //const guild = message.guild;

    //let generic = '';
        //generic += `**Owner:** <@!${guild.ownerID}> \n`;
        //generic += `**Owner ID:** ${guild.ownerID} \n`;
        //generic += `**Created:** ${guild.createdAt.toDateString()} \n`;
        //generic += `**Guild ID:** ${guild.id} \n`;

    //let statistics = '';
        //statistics += `**Members:** ${guild.memberCount} \n`;
        //statistics += `**Max members:** ${guild.maximumMembers} \n`;
        //statistics += `**Verified:** ${guild.verified ? 'Yes' : 'No'} \n`;
        //statistics += `**Partnered:** ${guild.partnered ? 'Yes' : 'No'} \n`;

    //const features = guild.features.map(feature => util.toTitleCase(feature.replace(/[-_]/g, ' ')));

//    if (message.content === prefix + 'si') {
//        const e = new Discord.MessageEmbed()
//            .setTitle(`Info ${message.guild.name}`)
//            .setThumbnail(guild.iconURL({dynamic: true, size: 2048}))
//            .setColor(0xf04747)
//            .setTimestamp()
//            .setFooter(`Command executed by ${message.author.tag}`)
//            .addFields(
//                /** @type {any} */ {name: '__**Generic**__', value: generic, inline: true},
//                /** @type {any} */ {name: '__**Statistics**__', value: statistics, inline: true },
//                /** @type {any} */ {name: '__**Features**__', value: features.join(', ') || 'None', inline: false }
//            )
//        message.channel.send(e)
//    }
//});

//client.on('message')

client.login(config.token);