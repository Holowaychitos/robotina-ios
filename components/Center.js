var React = require('react-native')
var {View, StyleSheet} = React

var FullButton = React.createClass({
  propTypes: {
    children: React.PropTypes.any
  },

  render () {
    return <View style={styles.container}>
		{this.props.children}
    </View>
  }
})

var styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
})

module.exports = FullButton
