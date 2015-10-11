var React = require('react-native')
var {View, StyleSheet} = React

var SIZES = require('../style/sizes')
var COLORS = require('../style/colors')

var InputGroup = React.createClass({

  propTypes: {
    children: React.PropTypes.any
  },

  render () {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    )
  }
})

var styles = StyleSheet.create({
  container: {
    padding: SIZES.INPUT_GROUP_PADDING,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.BORDER_COLOR,
    borderBottomWidth: 1
  }
})

module.exports = InputGroup
