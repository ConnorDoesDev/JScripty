const { prefix } = require('../../config.json');
const Discord = require('discord.js');

module.exports = {
    name: 'help',

    description: 'List all of my commands or info about a specific command.',

    execute(message, args) {
        const data = [];
        const { commands } = message.client;

        if (!args.length) {
            //data.push('Here\'s a list of all my commands:');
            data.push( "`" + commands.map(command => command.name).join('`, `') + "`");
            //data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);

            const embed = new Discord.MessageEmbed()
                .setTitle(`JScripty commands | Prefix ${prefix}`)
                .setDescription(data)
                .setTimestamp()
                .setFooter(`Command executed by ${message.author.tag}`)
            message.channel.send(embed)// {split: true})

        } else {
            const name = args[0].toLowerCase();
            const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

            if (!command) {
                return message.reply('that\'s not a valid command!');
            }

            data.push(`**Name:** ${command.name}`);

            if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
            if (command.description) data.push(`**Description:** ${command.description}`);
            if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

            data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

            message.channel.send(data, { split: true });
        }
    },
};