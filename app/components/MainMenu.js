'use strict';

import React, {View, Image, Text, TouchableHighlight, ScrollView, StyleSheet, Component} from 'react-native';
import MenuButton from './MenuButton';
import Challenges from '../challenges/Challenges';
import ShoutOuts from '../shoutouts/ShoutOuts';
import Meetup from '../meetup/Meetup';
import Profile from '../profile/Profile';
import Rewards from '../rewards/Rewards';
import Events from '../lib/events';

class MainMenu extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ScrollView style={styles.container}
        contentOffset={{x:0, y:-30}}
        contentInset={{top:30}}>
        <TouchableHighlight onPress={this.onPress.bind(this)} underlayColor="rgba(255,255,255,0.2)">
          <Image style={styles.profileImage} source={require('../assets/profile-image.jpg')}></Image>
        </TouchableHighlight>
        <MenuButton icon="android-bicycle" view={Challenges}>Challenges</MenuButton>
        <MenuButton icon="speakerphone" view={ShoutOuts}>Shout Outs</MenuButton>
        <MenuButton icon="person-stalker" view={Meetup}>Meetup</MenuButton>
        <MenuButton icon="ribbon-a" view={Rewards}>Rewards</MenuButton>
        <MenuButton icon="gear-b">Settings</MenuButton>
      </ScrollView>
    )
  }

  onPress(){
    Events.trigger('MenuItemPressed', {
      route:{
        component:Profile,
        title:'My Profile'
      }
    });
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#185D6F'
  },
  profileImage: {
    height:100,
    width:100,
    borderRadius:50,
    borderWidth:2,
    borderColor:'#FFF',
    alignSelf:'center',
    marginBottom:10
  }

});

module.exports = MainMenu;
