module.exports = (client) => {
    const statusOptions = [
        'Moderating the server',
        'Yay am helping'
    ]

    let counter = 0

    const updateStatus = () => {
        client.user.setPresence({
            status: 'online',
            activities: [{
                name: statusOptions[counter]
            }]
        })

        if(++counter >= statusOptions.length) {
            counter = 0
        }

        setTimeout(updateStatus, 1000 * 60 * 30)
    }
    updateStatus()
}