var React = require('react-native')
var _ = require('lodash')
var RNChart = require('react-native-chart')

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

// var API = require('../lib/api')

var Panel = React.createClass({

  propTypes: {
    onForward: React.PropTypes.func.isRequired
  },

  getInitialState () {
    return {
      control: {
        output_1: false,
        output_2: false,
        output_3: false
      }
    }
  },

  componentDidMount () {
    /*
    API.getWeatherTimeline.then((data) => {
      this.setState({
        weather: _.get(data, ['body', 'values'], [])
      })
    })
    */
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

    var chartData = [
      {
        name: 'LineChart',
        lineWidth: 2,
        showDataPoint: true,
        data: [32, 23, 21, 32, 25]
      }
    ]

    var xLabels = ['6 Oct', '7 Oct', '8 Oct', '9 Oct', '10 Oct']

    return (
      <View style={styles.container}>
        <Header title='Robotina Panel'/>

        <ScrollView style={styles.scrollView}>
        <Form>
          <InputGroup>
            <Text style={{flex: 1}}>Luz de la entrada</Text>
            <SwitchIOS
              onTintColor={COLORS.PRIMARY}
              value={_.get(control, 'output_1')}
              onValueChange={this._onControl.bind(null, {
                'output_1': !_.get(control, 'output_1')
              })} />
          </InputGroup>

          <InputGroup>
            <Text style={{flex: 1}}>Luz del patio</Text>
            <SwitchIOS
              onTintColor={COLORS.PRIMARY}
              value={_.get(control, 'output_2')}
              onValueChange={this._onControl.bind(null, {
                'output_2': !_.get(control, 'output_2')
              })} />
          </InputGroup>

          <InputGroup>
            <Text style={{flex: 1}}>Luz de la habitación</Text>
            <SwitchIOS
              onTintColor={COLORS.PRIMARY}
              value={_.get(control, 'output_3')}
              onValueChange={this._onControl.bind(null, {
                'output_3': !_.get(control, 'output_3')
              })} />
          </InputGroup>

          <InputGroup>
            <Text style={{flex: 1}}>Aire AC</Text>
            <SliderIOS
              minimumTrackTintColor={COLORS.PRIMARY}
              style={{flex: 1}}
              maximumValue={10}
              minimumValue={0}
              value={5} />
          </InputGroup>
        </Form>

        <RNChart style={styles.chart}
          chartData={chartData}
          verticalGridStep={8}
          xLabels={xLabels} />

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
  },
  chart: {
    margin: 20,
    height: 200
  }
})

module.exports = Panel
