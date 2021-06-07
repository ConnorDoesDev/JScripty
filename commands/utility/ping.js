module.exports = {
    name: 'ping',

    aliases: ['latency', 'ping'],

    description: 'Get the bot and websocket latency',


    async execute(message, args, client) {
            const pong = await message.channel.send('Loading data');
            await pong.edit(`🏓Latency is ${pong.createdTimestamp - message.createdTimestamp}ms.\nAPI Latency is ${Math.round(client.ws.ping)}ms`);
    },
};