const express = require('express')
const pool = require('../router/pool')
var router = express.Router()
// 用户登录
router.post('/login', (req, res) => {
  var obj = req.body
  var $uname = obj.uname
  var $upwd = obj.upwd
  if (!$uname) {
    res.send('1')
    return
  }
  if (!$upwd) {
    res.send('0')
    return
  }
  var sql = 'select * from flower_user where uname=? and upwd=?'
  pool.query(sql, [$uname, $upwd], (err, result) => {
    if (err) throw err
    if (result.length > 0) {
      res.send(result)
      console.log(result)
    } else {
      res.send('0')
    }
  })
})

module.exports = router
