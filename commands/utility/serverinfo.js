const Discord = require('discord.js');

module.exports = {
    name: 'serverinfo',

    aliases: ['si', 'guildinfo'],

    description: 'Get the guild\'s info',


    async execute(message, args, client) {
        const guild = message.guild;

        let generic = '';
        generic += `**Owner:** <@!${guild.ownerID}> \n`;
        generic += `**Owner ID:** ${guild.ownerID} \n`;
        generic += `**Created:** ${guild.createdAt.toDateString()} \n`;
        generic += `**Guild ID:** ${guild.id} \n`;

        let statistics = '';
        statistics += `**Members:** ${guild.memberCount} \n`;
        statistics += `**Max members:** ${guild.maximumMembers} \n`;
        statistics += `**Verified:** ${guild.verified ? 'Yes' : 'No'} \n`;
        statistics += `**Partnered:** ${guild.partnered ? 'Yes' : 'No'} \n`;

        const features = guild.features.map(feature => util.toTitleCase(feature.replace(/[-_]/g, ' ')));


        const e = new Discord.MessageEmbed()
            .setTitle(`Info ${message.guild.name}`)
            .setThumbnail(guild.iconURL({dynamic: true, size: 2048}))
            .setColor(0xf04747)
            .setTimestamp()
            .setFooter(`Command executed by ${message.author.tag}`)
            .addFields(
                /** @type {any} */ {name: '__**Generic**__', value: generic, inline: true},
                /** @type {any} */ {name: '__**Statistics**__', value: statistics, inline: true },
                /** @type {any} */ {name: '__**Features**__', value: features.join(', ') || 'None', inline: false }
            )
        message.channel.send(e)
    }
 }
