module.exports = {
    name: ['ping', 'latency'],

    description: 'Get the bot and websocket latency',


    execute(message, args) {
        message.channel.send('Loading data').then (async (msg) =>{
            msg.delete()
            message.channel.send(`🏓Latency is ${msg.createdTimestamp - message.createdTimestamp}ms.\nAPI Latency is ${Math.round(client.ws.ping)}ms`);
        })
    },
};