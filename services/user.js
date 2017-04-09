// 参考:　https://github.com/nuysoft/Mock/wiki
const Mock  = require('mockjs');  
const Random = Mock.Random;

// 定义api名称
const name="users"
const rowNum=50

module.exports = (function mockData() {
    let data = { apiName:name, content: [] }    
    for (let i = 0; i < rowNum; i++) {
        const Name=Random.cname()
        data.content.push({ 
            // 数据结构
            name: Name, 
            city:Random.city(),
            avatar:Random.image('128x128', Random.color(), Name)
        })
    }
    return data
})()

