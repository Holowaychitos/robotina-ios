var request = require('superagent')

module.exports = {
  getWeatherTimeline: request.get('http://api-m2x.att.com/v2/devices/f816f8513a16d9bd7e38ae2ec87e6e77/streams/temperatura/values')
}
