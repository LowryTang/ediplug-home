const smartplug = require('edimax-smartplug')
const options = {
  timeout: 10000,
  name: 'edimax',
  host: '192.168.1.14',
  username: 'admin',
  password: '880711'
}

module.exports = {
  switchLamp (status = false) {
    return smartplug.setSwitchState(status, options)
  },
  getState () {
    return smartplug.getSwitchState(options)
  },
  updateDevice () {
    return smartplug
      .discoverDevices({
        timeout: 3000,
        address: '192.168.1.255'
      })
      .then(function (results) {
        console.log('Discovery Result:', results)
        if (results[0]) {
          options.host = results[0].addr
        }
        return options
      })
  }
}
