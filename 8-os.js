// OS
const os = require('os');
// info about current user
const user = os.userInfo()
console.log(user)
// method returns system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)
const currentOs = {
  name: os.type(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOs)