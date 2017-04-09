const fs = require('fs')
const path = require("path")

module.exports = function searchFile(dir,cb) {
    var baseLogPath = path.resolve(__dirname, dir) 
    console.log(baseLogPath)
    fs.readdirSync(baseLogPath).forEach(function (file) {
        let pathname = path.join(baseLogPath, file)
        if (fs.statSync(pathname).isDirectory()) {
            searchFile(pathname, cb)
        } else {
            cb(path.normalize(pathname))
        }
    })
}