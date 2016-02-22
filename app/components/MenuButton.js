'use strict';

import React, {View, TouchableHighlight, Text, StyleSheet, Component} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Events from '../lib/events';

class MenuButton extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <TouchableHighlight onPress={this.onPress.bind(this)} underlayColor="rgba(255,255,255,0.2)">
        <View style={styles.container}>
          <Icon style={styles.icon} name={this.props.icon} color="#FFF" size={35} />
          <Text style={styles.menuText}>{this.props.children}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  onPress(){
    Events.trigger('MenuItemPressed', {
      route:{
        component:this.props.view,
        title:this.props.children.toString()
      }
    });
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
    flex:1,
    paddingTop:3,
    paddingLeft:10
  },
  icon: {}
});

module.exports = MenuButton;
