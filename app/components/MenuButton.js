'use strict';

import React, {View, TouchableHighlight, Text, StyleSheet, Component} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class MenuButton extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <TouchableHighlight underlayColor="rgba(255,255,255,0.2)">
        <View style={styles.container}>
          <Icon style={styles.icon} name={this.props.icon} color="#FFF" size={35} />
          <Text style={styles.menuText}>{this.props.children}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    height:70,
    paddingLeft:15,
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'stretch',
    borderBottomWidth:1,
    borderBottomColor:'#467D8C'
  },
  menuText: {
    fontFamily:'Roboto-Light',
    fontSize:25,
    color:'#FFF',
    flex:10,
    paddingTop:3
  },
  icon: {
    flex:2
  }
});

module.exports = MenuButton;
