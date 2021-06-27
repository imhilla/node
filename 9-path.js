// path
const path = require('path')
const fileName = path.join('/content/', 'subfolder', 'test.txt')
// console.log(path.sep)
// console.log(path)

const baseName = path.basename(fileName)
const abs = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(abs)