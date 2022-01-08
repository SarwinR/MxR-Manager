module.exports = {
    category: 'Essential',
    description: 'Delete multiple messages at once',

    permissions: ['MANAGE_MESSAGES'],
    
    slash: 'both',
    testOnly: true,

    guildOnly: true,

    minArgs: 0, 
    expectedArgs: '<amount>',
    expectedArgsTypes: ['NUMBER'],

    callback: async ({message, interaction, channel, args}) => {
        const amount = args.length ? parseInt(args.shift()) : 10

        if(message) {
            await message.delete()
        }

        //bulk delete
        const { size } = await channel.bulkDelete(amount, true)

        //fetch-delete
        /*
        const messages = await channel.messages.fetch({ limit: amount })
        const { size } = messages

        messages.forEach((message) => message.delete())
        */

        const reply = `Deleated ${size} message(s).`

        if(interaction){
            return reply;
        }

        channel.send(reply).then(msg => {
            setTimeout(() => msg.delete(), 5000)
          })
    },
}