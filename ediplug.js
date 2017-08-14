const smartplug = require('edimax-smartplug')
const options = {
  timeout: 10000,
  name: 'edimax',
  host: '192.168.1.13',
  username: 'admin',
  password: '880711'
}

// discover devices
// smartplug
//   .discoverDevices({
//     timeout: 3000,
//     address: '192.168.1.255'
//   })
//   .then(function(results) {
//     console.log('Discovery Result:', results)
//   })
//   .catch(function(e) {
//     console.log('Request failed: ', e)
//   })

// smartplug
//   .getDeviceInfo(options)
//   .then(function(info) {
//     console.log(info)
//   })
//   .catch(function(e) {
//     console.log('Request failed: ', e)
//   })

module.exports = {
  switchLamp (status = false) {
    return smartplug.setSwitchState(status, options)
  },
  getState () {
    return smartplug.getSwitchState(options)
  }
}
