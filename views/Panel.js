var React = require('react-native')
var _ = require('lodash')

var {
  StyleSheet,
  Text,
  View,
  SwitchIOS,
  ScrollView,
  SliderIOS
} = React

var InputGroup = require('../components/InputGroup')
var Header = require('../components/Header')
var Form = require('../components/Form')

var COLORS = require('../style/colors')

var Panel = React.createClass({

  propTypes: {
    onForward: React.PropTypes.func.isRequired
  },

  getInitialState () {
    return {
      control: {
        led: false
      }
    }
  },

  _onUpdate (newControl) {
    this.setState(_.merge(this.state, {
      control: newControl
    }))
  },

  _onControl (newControl) {
    window.socket.emit('controlHandler', newControl)
    this._onUpdate(newControl)
  },

  render () {
    var {control} = this.state

    var ledValue = _.get(control, 'led')

    return (
      <View style={styles.container}>
        <Header title='Robotina Panel'/>

        <ScrollView style={styles.scrollView}>
        <Form>
          <InputGroup>
            <Text style={{flex: 1}}>Luz de la entrada</Text>
            <SwitchIOS
              onTintColor={COLORS.PRIMARY}
              value={ledValue}
              onValueChange={this._onControl.bind(null, {
                led: !ledValue
              })} />
          </InputGroup>

          <InputGroup>
            <Text style={{flex: 1}}>Temperatura</Text>
            <SliderIOS
              minimumTrackTintColor={COLORS.PRIMARY}
              style={{flex: 1}}
              maximumValue={10}
              minimumValue={0}
              value={5} />
          </InputGroup>
        </Form>
        </ScrollView>
      </View>
    )
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#FAFAFA'
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
  },
  scrollView: {
    flex: 1
  }
})

module.exports = Panel
