const keepAlive = require('./server');
const { Client, Intents, Permissions } = require('discord.js')
const WOKCommands = require('wokcommands')
const path = require('path')
const dotenv = require('dotenv')
const { permissions } = require('./commands/moderation/ban')
dotenv.config()
Permissions.FLAGS.MEM
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})


//Permissions.FLAGS.mana
client.on('ready', () => {
    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        featuresDir: path.join(__dirname, 'features'),
        typeScript: false,
        testServers: ['803192609430044693'],
    }).setDefaultPrefix('.')
    
    console.log('Bot is ready')
})

keepAlive();
client.login(process.env['BOT_TOKEN'])