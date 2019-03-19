var mysql = require('mysql')
var db = {}
db.query = function sqlback (sqllan, fn) {
  var connection = mysql.createConnection({
    host: '47.94.247.204',
    user: 'root',
    password: '123QWE',
    database: 'cg',
    port: 3306
  })
  connection.connect(function (err) {
    if (err) {
      console.log(err + 'ooooooo')
    }
  })
  var sql = sqllan
  if (!sql) return
  connection.query(sql, function (err, rows, fields) {
    if (err) {
      console.log(err + 'kkkkkkk')
      return
    }
    fn(rows)
  })
  connection.end(function (err) {
    if (err) {
      console.log(err + 'lllllll')
    } else {
      console.log('连接关闭')
    }
  })
}
module.exports = db
