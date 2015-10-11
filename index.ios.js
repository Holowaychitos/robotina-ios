var React = require('react-native')
var _ = require('lodash')

var {
  AppRegistry,
  Navigator,
  AlertIOS,
  VibrationIOS
} = React

var Login = require('./views/Login')
var Panel = require('./views/Panel')

var Routes = {
  0: Login,
  1: Panel
}

window.navigator.userAgent = 'react-native'
var io = require('socket.io-client/socket.io')
window.socket = io.connect('http://192.100.0.101:3000', {jsonp: false})

window.socket.on('controlUpdate', (data) => {
  console.log({data})

  if (_.eq(data, {button: true})) {
    VibrationIOS.vibrate()
    AlertIOS.alert(
      'Awebo',
      'Alguien tocó tu timbre'
    )
  }
})

var atthack = React.createClass({

  render () {
    return (
      <Navigator
          initialRoute={{name: 'Login', index: 1}}
          renderScene={(route, navigator) => {
            var CurrentView = Routes[route.index]

            return <CurrentView
              name={route.name}
              onForward={() => {
                var nextIndex = route.index + 1
                navigator.push({
                  name: 'Panel',
                  index: nextIndex
                })
              }}
              onBack={() => {
                if (route.index > 0) {
                  navigator.pop()
                }
              }}
            />
          }}
        />
    )
  }
})

AppRegistry.registerComponent('atthack', () => atthack)
