'use strict';

import React, {View, Image, Text, ScrollView, StyleSheet, Dimensions, Component} from 'react-native';
var {height, width} = Dimensions.get('window');

class Challenges extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ScrollView style={[styles.container, this.props.style]}>
        <Image style={styles.challengeImage} source={require('../assets/fitness.jpg')}>
          <View style={styles.challengeTextHolder}>
            <Text style={styles.challengeText}>Fitness Challenge</Text>
          </View>
        </Image>

        <Image style={styles.challengeImage} source={require('../assets/programmer.jpg')}>
          <View style={styles.challengeTextHolder}>
            <Text style={styles.challengeText}>Bug Chase</Text>
          </View>
        </Image>

        <Image style={styles.challengeImage} source={require('../assets/retail.jpg')}>
          <View style={styles.challengeTextHolder}>
            <Text style={styles.challengeText}>Rewards Signup</Text>
          </View>
        </Image>

        <Image style={styles.challengeImage} source={require('../assets/callcenter.jpg')}>
          <View style={styles.challengeTextHolder}>
            <Text style={styles.challengeText}>Holiday Sales</Text>
          </View>
        </Image>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10
  },
  challengeImage:{
    position:'relative',
    resizeMode: 'cover',
    alignSelf:'stretch',
    height:300,
    width:width - 20,
    marginTop:10,
    marginBottom:10,
    justifyContent:'flex-end',
    borderWidth:1,
    borderColor:'#6A6A6A'
  },
  challengeTextHolder: {
    height:45,
    paddingLeft:20,
    alignSelf:'stretch',
    backgroundColor:'rgba(0,0,0,0.7)',
    justifyContent:'center'
  },
  challengeText: {
    fontFamily:'Roboto-Light',
    color:'white',
    fontSize:22
  }
});

module.exports = Challenges;
