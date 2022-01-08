const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    prefix: '.',
  
    botToken: process.env['BOT_TOKEN'],

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
    ]
  };