var React = require('react-native')
var {View, Text, StyleSheet, TouchableOpacity} = React

var SIZES = require('../style/sizes')
var COLORS = require('../style/colors')

var FullButton = React.createClass({
  propTypes: {
    onPress: React.PropTypes.func,
    text: React.PropTypes.string,
    color: React.PropTypes.string
  },

  render () {
    var {color} = this.props

    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
        <View style={[styles.button, color && {backgroundColor: color}]}>
          <Text style={styles.buttonText}>
            {this.props.text.toUpperCase()}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
})

var styles = StyleSheet.create({
  container: {
  },
  button: {
    height: SIZES.INPUT_HEIGHT,
    margin: SIZES.BASE_PADDING,
    backgroundColor: COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.BORDER_RADIUS
  },
  buttonText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 16
  }
})

module.exports = FullButton
