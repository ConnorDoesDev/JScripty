const Discord = require('discord.js');
const util = require('../../util.js')

module.exports = {

    name: 'roleinfo',

    aliases: ['ri'],

    description: 'get info about a role',

    async execute(message, args, client) {
        if (!args.length) {
            return await message.channel.send(`You have to provide a role ID ${message.author}!`)
        }

        let role = message.guild.roles.resolve(args[0]);
        if (!role) return await message.channel.send(`This is not a valid role ID.`)

        let generic = '';
        generic += `**role name:** ${role.name} (${role.id})\n`;
        generic += `**Created on** ${role.createdAt.toUTCString()}\n`;
        generic += `**From guild:** ${role.guild}\n`
        generic += `**Managed:** ${role.managed ? 'Yes' : 'No'}\n`
        generic += `**Position:** ${role.position} (from below)\n`
        generic += `**Hoisted:** ${role.hoist ? 'Yes' : 'No'}\n`
        generic += `**Color:** \`${role.hexColor}\` (\`${role.color}\`)`

        console.log(role)
        let permissions;
            if (role.permissions.has('ADMINISTRATOR')) {
                permissions = `Administrator`
            } if (!role.permissions.has('ADMINISTRATOR')) {
                permissions = role.permissions.toArray().toString()
                permissions = permissions.toLowerCase()
                permissions = permissions.replace(/[-_]/g, ' ')
                permissions = permissions.replace(/[,]/g, ", ")
                //permission => util.toTitleCase(permission.replace(/[-_]/g, ' '))
            } if (!permissions) {
                permissions = `None`

        }

            const e = new Discord.MessageEmbed()
                .setTitle(`About role ${role.name}`)
                .setColor(role.color)
                .setDescription(`
${generic}

**permissions:** ${permissions}
                `)
                //.addFields(
                //    /** @type {any} */ {name: '__**Generic**__', value: generic, inline: true},
                //    /** @type {any} */ {name: '__**Permissions**__', value: permissions, inline: true},
                //    /** @type {any} */ {name: '__**Features**__', value: features.join(', ') || 'None', inline: false }
                //)

            await message.channel.send(e)


        }

    }