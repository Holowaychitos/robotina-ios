var React = require('react-native')
var {View, StyleSheet} = React

var COLORS = require('../style/colors')

var Form = React.createClass({
  propTypes: {
    children: React.PropTypes.any
  },

  render () {
    var {children} = this.props

    return (
      <View style={styles.container}>
        {children}
      </View>
    )
  }
})

var styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: 30,
    backgroundColor: '#FFF',
    borderColor: COLORS.BORDER_COLOR,
    borderTopWidth: 1
  }
})

module.exports = Form
