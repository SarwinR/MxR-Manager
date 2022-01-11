const config = require('../config');

module.exports = (client) => {

    let guild = client.guilds.cache.get(config.guildId)
    let statsChannel = client.channels.cache.get(config.statsChannelId)

    const updateStats = () => {
        const memberCount = guild.memberCount
        statsChannel.setName(`Members: ${memberCount}`)
        setTimeout(updateStats, 1000 * 60 * 60)
    }
    updateStats()
}