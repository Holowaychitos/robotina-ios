var React = require('react-native')
var {View, Text, StyleSheet} = React

var SIZES = require('../style/sizes')
var COLORS = require('../style/colors')

var Jeader = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  render () {
    var {title} = this.props

    return (
        <View style={styles.container}>
          <Text style={styles.title}>
            {title}
          </Text>
        </View>
    )
  }
})

var styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    padding: SIZES.INPUT_GROUP_PADDING,
    alignItems: 'center',
    borderBottomColor: COLORS.BORDER_COLOR,
    borderBottomWidth: 1
  },
  title: {
    fontSize: SIZES.FONT_SIZE + 3,
    fontWeight: '500'
  }
})

module.exports = Jeader
