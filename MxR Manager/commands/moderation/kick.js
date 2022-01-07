module.exports = {
    category: 'Moderation',
    description: 'Kicks a user from the server',

    permissions: ['KICK_MEMBERS'],
    
    slash: 'both',
    testOnly: true,

    guildOnly: true,

    minArgs: 2, 
    expectedArgs: '<user> <reason>',
    expectedArgsTypes: ['USER', 'STRING'],

    callback: ({message, interaction, args}) => {
        const target = message ? message.mentions.members?.first() : interaction.options.getMember('user')

        if(!target) {
            return 'Please tag someone you want to kick!'
        }

        if(!target.kickable){
            return 'The user you tagged is too powerful to kick!'
        }

        args.shift()
        const reason = args.join(' ')
        if(reason === ""){
            return 'Specify a reason for this action!'
        }

        target.kick(reason)

        return `<@${target.id}> was kicked!`
    },
}