const express = require('express')
const app = express()

const ediplug = require('./ediplug')

app.get('/home/switch', function (req, res) {
  ediplug.getState().then(state => {
    return ediplug.switchLamp(!state).then(() => {
      res.send(200)
    }).catch(err => {
      res.send(err)
    })
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
