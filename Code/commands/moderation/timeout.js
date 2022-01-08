module.exports = {
    category: 'Moderation',
    description: 'Timeout a user.',

    permissions: ['KICK_MEMBERS'],
    
    slash: 'both',
    testOnly: true,

    guildOnly: true,

    minArgs: 2, 
    expectedArgs: '<user> <duration in minutes> [reason]]',
    expectedArgsTypes: ['USER', 'INTERGER', 'STRING'],

    callback: ({message, interaction, args}) => {
        const target = message ? message.mentions.members?.first() : interaction.options.getMember('user')
        if(!target) {
            return 'Please tag someone you want to timeout!'
        }
        if(!target.kickable){
            return 'The user you tagged is too powerful to timeout!'
        }

        args.shift()
        //remove user from timeout corner
        if(args == '0'){
            target.timeout(NaN, "")
            return `<@${target.id}> has been removed from timeout corner.`
        }

        const duration = parseInt(args) * 60 * 1000
        if(!duration){
            return 'The duration is invalid!'
        }

        args.shift()
        const reason = args.join(' ')

        target.timeout(duration, reason)

        return `<@${target.id}> has been timed out for ${duration/60000} minutes!`
    },
}