const ds18b20 = require('ds18b20')
const interval = 3000

module.exports = io => {
  io.on('connection', socket => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)

    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`)
    })
  })
  io.on('connection', function(socket) {
    let sensorId = []
    ds18b20.sensors(function(id) {
      sensorId = id
      socket.emit('sensors', id)
    })
    setInterval(function() {
      sensorId.forEach(function(id) {
        ds18b20.temperature(id, function(value) {
          socket.emit('temps', {id: id, value: value})
        })
      })
    }, interval)
  })
}
