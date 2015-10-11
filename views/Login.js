var React = require('react-native')

var TouchID = require('react-native-touch-id')

var COLORS = require('../style/colors')

var Button = require('../components/Button')
var Center = require('../components/Center')

var {
  StyleSheet,
  Text,
  View,
  Image
} = React

var Login = React.createClass({

  propTypes: {
    onForward: React.PropTypes.func.isRequired
  },

  _onSuccessStart () {
    console.log('SUCCESS')
    this.props.onForward()
  },

  _onStart () {
    TouchID.isSupported()
      .then(() => {
        TouchID.authenticate('To get your advanced features')
          .then(this._onSuccessStart)
      })
      .catch(this._onSuccessStart)
  },

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.welcome}>
          <Center>
            <Image style={styles.robotina} source={{uri: 'http://i.imgur.com/mmA0KRB.png'}} />
            <Text style={styles.welcomeText}>
              Welcome to Robotina
            </Text>
            <Text>
              Control your home, control your life.
            </Text>
          </Center>
        </View>

        <Button onPress={this._onStart} text='Start' />
      </View>
    )
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: COLORS.WHITE
  },
  robotina: {
    height: 256,
    width: 256,
    resizeMode: 'contain'
  },
  welcomeText: {
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 28,
    fontWeight: '200'
  },
  welcome: {
    flex: 1,
    justifyContent: 'center'
  }
})

module.exports = Login
