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
    backgroundColor: '#FFF',
    padding: SIZES.INPUT_GROUP_PADDING,
    paddingTop: SIZES.INPUT_GROUP_PADDING + 20,
    alignItems: 'center',
    borderBottomColor: COLORS.BORDER_COLOR,
    borderBottomWidth: 1
  },
  title: {
    fontSize: SIZES.FONT_SIZE + 2,
    fontWeight: '500'
  }
})

module.exports = Jeader
