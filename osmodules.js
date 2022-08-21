const os = require('os')

 
//Info about user
const user = os.userInfo()
console.log(user)

//method returns system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freemem:os.freemem(),
}
console.log(currentOS)