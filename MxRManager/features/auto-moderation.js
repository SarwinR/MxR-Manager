const config = require('../config');

module.exports = (client) => {
    client.on('messageCreate', async message =>{

        //check if the user is whitelisted
        const target = message.member
        if(!target.kickable){
            return
        }

        //check for mass mentions
        const mentionCount = message.mentions.users.size
        if(mentionCount >= config.massMentionThreshold){
            console.log('need to timeout this man!')
        }

        //check for bad words


        //check for shady links
        let containShadyLink = false
        config.shadyLinks.forEach(element => {
            if(message.content.indexOf(element) != -1){
                containShadyLink = true
                return
            }
        });

        if(containShadyLink)
        {
            await message.delete()
            const warningMessage = `${message.member} The messages you just sent contains shady links!`
            message.channel.send(warningMessage).then(msg => {
                setTimeout(() => msg.delete(), 10000)
              })
        }

        //check for message rate

    })
}