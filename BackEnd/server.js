const {app} = require('./app')
const {loginback} = require('./loginback')
const { regisback } = require('./regisback')
const { friendlist } = require('./friendlist')
const { addfriend } = require('./addfriend')
const {addactivity} = require('./addactivity')
const {historylist} = require('./historylist')
const {getactivitylist} = require('./getactivitylist')
const {historydetail} = require('./historydetail')

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

addactivity.listen(5000, () => {
    console.log("listeningAddActivity...")
})

historylist.listen(1113, () => {
    console.log("listeningHistoryList...")
})

historydetail.listen(4444, () => {
    console.log("listeningHistoryDetails...")
})

getactivitylist.listen(1115, () => {
    console.log("listeningActivityList...")
})