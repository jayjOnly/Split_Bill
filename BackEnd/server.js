const {app} = require('./app')
const {loginback} = require('./loginback')
const { regisback } = require('./regisback')

app.listen(8080, () => {
    console.log("listeningHome...")
})

loginback.listen(5555, () => {
    console.log("listeningLogin...")
})

regisback.listen(2525, () => {
    console.log("listeningRegis...")
})