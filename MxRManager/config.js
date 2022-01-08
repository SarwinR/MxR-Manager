const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    prefix: '.',
    botToken: process.env['BOT_TOKEN']
  };