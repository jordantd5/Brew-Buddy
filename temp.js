const sensor = require('ds18b20-raspi')

sensor.readSimpleF(1, (err, temp) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`${temp} degF`)
  }
})

export default sensor
