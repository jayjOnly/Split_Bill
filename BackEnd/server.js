const {app} = require('./app')
const {loginback} = require('./loginback')
const { regisback } = require('./regisback')
const { friendlist } = require('./friendlist')
const { addfriend } = require('./addfriend')

app.listen(8080, () => {
    console.log("listeningHome...")
})

loginback.listen(5555, () => {
    console.log("listeningLogin...")
})

regisback.listen(2525, () => {
    console.log("listeningRegis...")
})

friendlist.listen(1111, () => {
    console.log("listeningFriendlist...")
})

addfriend.listen(1212, () => {
    console.log("listeningAddFriend...")
})