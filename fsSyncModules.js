const {readFileSync, writeFileSync} = require('fs')
console.log('start')
const outer = readFileSync('./content/first.txt','utf-8')
const inner = readFileSync('./content/subfolder/text.txt', 'utf8')

writeFileSync('./content/result-sync.txt',`Here is the result: ${outer}, ${inner}`,{flag: 'a'})

console.log('Done with the task')
console.log('starting the next one')
