var fs = require('fs')
module.exports = {
  readfileSync: function (path) { // 同步读取
    var data = fs.readFileSync(path, 'utf-8')
    console.log(data)
  },
  readfile: function (path) {
    return new Promise(resolve => {
      fs.readFile(path, function (err, data) {
        if (err) {
          console.log(err)
        } else {
          resolve(data)
        }
      })
    })
  }
}
