const smartplug = require('edimax-smartplug')
const options = {
  timeout: 10000,
  name: 'edimax',
  host: '192.168.1.14',
  username: 'admin',
  password: '880711'
}
  // smartplug.getDeviceInfo(options).then(function (info) {
  //   console.log(info)
  // }).catch(function (e) {
  //   console.log('Request failed: ', e)
  // })

module.exports = {
  switchLamp (status = false) {
    return smartplug.setSwitchState(status, options)
  }
}
