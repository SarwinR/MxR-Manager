const config = require('./config')
const keepAlive = require('./server')
const { Client, Intents, Permissions } = require('discord.js')
const WOKCommands = require('wokcommands')
const path = require('path')

Permissions.FLAGS.MEM
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        featuresDir: path.join(__dirname, 'features'),
        typeScript: false,
        testServers: ['803192609430044693'],
    })
    .setDefaultPrefix(config.prefix)
    .setCategorySettings([
        {
            name: 'Essential',
            emoji: '💧',
            hidden: true
        },
        {
            name: 'Moderation',
            emoji: '⚖️',
            hidden: true
        },
        {
            name: 'Testing',
            emoji: '⚒️',
            hidden: true
        },
        {
            // You can change the default emojis as well
            // "Configuration" is ⚙ by default
            name: 'Configuration',
            emoji: '⚙️',
            // You can also hide a category from the help menu
            // Admins bypass this
            hidden: true
        },
        {
            // You can change the default emojis as well
            // "Configuration" is ⚙ by default
            name: 'Help',
            emoji: '❓',
            // You can also hide a category from the help menu
            // Admins bypass this
            hidden: true
        },
    ])

    console.log('Bot is ready')
})

keepAlive()
client.login(config.botToken)