module.exports = (client) => {
    const statusOptions = [
        'Am currently under development',
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