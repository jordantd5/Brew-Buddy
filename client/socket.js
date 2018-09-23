import io from 'socket.io-client'

const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!')
})

socket.on('sensors', function(data) {
  //append sensors to table
  data.forEach(function(d) {
    console.log('TEMP', d)
  })
})

//update corresponding row with sensor value
socket.on('temps', function(data) {
  console.log('actual temp', data)
})

export default socket
