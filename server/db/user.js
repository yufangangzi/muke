const db = require('./sql.js')
module.exports = () => {
  return {
    async getUsers (data) {
      return new Promise((resolve, reject) => {
        db.query('SELECT * FROM `user`', function (val) {
          resolve(val)
        })
      })
    },
    async addUser (data) {
      console.log(data)
      return new Promise((resolve, reject) => {
        db.query(`INSERT INTO user(NAME,age) VALUES("${data.name}",${data.age})`, function (val) {
          resolve(val)
        })
      })
    },
    async deleteUser (data) {
      return new Promise((resolve, reject) => {
        db.query(`DELETE FROM user WHERE id = ${data.id}`, function (val) {
          resolve(val)
        })
      })
    },
    async updateUser (data) {
      return new Promise((resolve, reject) => {
        db.query(`UPDATE user SET name = "${data.name}",age = ${data.age} WHERE id = ${data.id}`, function (val) {
          resolve(val)
        })
      })
    }
  }
}
