const express = require('express')
// 引入登录路由
const loginRequest = require('../api/login.js')
const bodyParser = require('body-parser')
// 创建web服务器
var app = express()
app.listen(3000)
// 中间件
app.use(bodyParser.urlencoded({extend: false}))

// 挂载路由器
app.use('/login', loginRequest)
