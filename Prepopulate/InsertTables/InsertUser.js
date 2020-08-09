module.exports = async function InsertForm(db) {
    var users = require('../Data/user.json')
    var userPromises = []
    
    for (var user of users) {
        console.log(user);
        userPromises.push(await db['users'].create({
            name: user.name,
            user_group: user.user_group
        })
        .then(console.log('Data has been populated.'))
        .catch(err => {console.log(err)})
        )
    }

    return userPromises
}