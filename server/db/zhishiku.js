const optfile = require('./fs-read.js')
const getFiles = require('./read2.js')
module.exports = () => {
  return {
    async getview (data) {
      const path = data.viewname
      return optfile.readfile(`${path}`)
    },
    async filesGet () {
      return getFiles.getFileList('wendang/')
    }
  }
}
