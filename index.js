// server.js
const db = require('./utils/dbmock.js');

var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router(db)
var middlewares = jsonServer.defaults()
var myport=30003

server.use(middlewares)

//访问控制
server.use(function (req, res, next) {
    next();
    /*
        if (isAuthorized(req)) { // add your authorization logic here
        next() // continue to JSON Server router
        } else {
        res.sendStatus(401)
        }
    */
})

server.use(jsonServer.rewriter({
  '/api/': '/',
  
}))

server.use(router)
server.listen(myport, function () {
    console.log('JSON Server is running')
    console.log('----------------------')
    console.log('Please open url:  http://127.0.0.1:'+myport)
})