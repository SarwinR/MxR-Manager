const dotenv = require('dotenv')
dotenv.config()

module.exports = {

    prefix: '.',
  
    botToken: process.env['BOT_TOKEN'],

    //for stats.js
    statsChannelId : '848181306214973480',
    guildId: '803192609430044693',

    //for auto-moderation
    massMentionThreshold: 5,

    shadyLinks: [
      'https://dlscord',
      'https://discorcl',
      'https://discord-nitro',
      'https://discorcl.click',
      'https://discorgift.click',
      'https://Discrodsteam',

      'http://dlscord',
      'http://discorcl',
      'http://discord-nitro',
      'http://discorcl.click',
      'http://discorgift.click',
      'http://Discrodsteam',
    ],

    badwords: [
      '',
      ''
    ]
  };