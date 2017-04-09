const searchFile = require ('./searchFile.js')
const _ = require ('lodash')

const searchPath = '../services' // 项目根目录开始写路径

module.exports = (function () {    
    let data = {}
    searchFile(searchPath, function (pathname) {
        
        const mockFile = require ( pathname.replace(/\\/g,"/") )
        let attachRules={}
        attachRules[mockFile.apiName]={
            success: true, content: mockFile.content       
        } 
        data = _.merge(data, attachRules)
    })
    return data
})()
