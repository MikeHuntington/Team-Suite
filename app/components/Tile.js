'use strict';

import React, {
  View,
  Text,
  StyleSheet,
  Component
} from 'react-native';

class Tile extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        {this.renderTitle()}
        {this.props.children}
      </View>
    )
  }

  renderTitle() {

    if(!this.props.title) {
      return;
    }

    return (
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{this.props.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    margin:10,
    padding:15,
    backgroundColor:'#FFF',
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset:{x:0,y:0}
  },
  titleContainer:{
    alignSelf:'stretch',
    borderBottomWidth:1,
    borderColor:'#EEE',
    padding:10,
    paddingLeft:0,
    marginBottom:15
  },
  titleText:{
    fontFamily:'Roboto-Light',
    fontSize:25
  }
});

module.exports = Tile;
