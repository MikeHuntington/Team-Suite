'use strict';

import React, {View, Text, ScrollView, StyleSheet, Component} from 'react-native';
import MenuButton from './MenuButton';

class MainMenu extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ScrollView style={styles.container}
        contentOffset={{x:0, y:-30}}
        contentInset={{top:30}}>

        <MenuButton icon="speakerphone">Shout Outs</MenuButton>
        <MenuButton icon="person-stalker">Meetup</MenuButton>
        <MenuButton icon="chatboxes">Discuss</MenuButton>
        <MenuButton icon="radio-waves">Beacon</MenuButton>
        <MenuButton icon="clock">Clock-In</MenuButton>
        <MenuButton icon="gear-b">Settings</MenuButton>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#185D6F'
  }

});

module.exports = MainMenu;
