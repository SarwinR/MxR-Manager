module.exports = {
    category: 'Moderation',
    description: 'Bans a user from the server!',

    permissions: ['BAN_MEMBERS'],
    
    slash: 'both',
    testOnly: true,

    guildOnly: true,

    minArgs: 2, 
    expectedArgs: '<user> <reason>',
    expectedArgsTypes: ['USER', 'STRING'],

    callback: ({message, interaction, args}) => {
        const target = message ? message.mentions.members?.first() : interaction.options.getMember('user')

        if(!target) {
            return 'Please tag someone you want to ban!'
        }

        if(!target.banable){
            return 'The user you tagged is too powerful to ban!'
        }

        args.shift()
        const reason = args.join(' ')
        if(reason === ""){
            return 'Specify a reason for this action!'
        }

        target.ban({
            reason,
            days: 0
        })

        return `<@${target.id}> was banned!`
    },
}