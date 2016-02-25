'use strict';

import React, {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Component} from 'react-native';
import ChallengeDetail from './ChallengeDetail';

var {height, width} = Dimensions.get('window');

class Challenges extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ScrollView style={[styles.container, this.props.style]}>
        <TouchableOpacity onPress={() => this.viewChallenge()}>
          <Image style={styles.challengeImage} source={require('../assets/fitness.jpg')}>
            <View style={styles.challengeTextHolder}>
              <Text style={styles.challengeText}>Fitness Challenge</Text>
            </View>
          </Image>
        </TouchableOpacity>

        <Image style={styles.challengeImage} source={require('../assets/programmer.jpg')}>
          <View style={styles.challengeTextHolder}>
            <Text style={styles.challengeText}>Bug Chase</Text>
          </View>
        </Image>

        <Image style={styles.challengeImage} source={require('../assets/retail.jpg')}>
          <View style={styles.challengeTextHolder}>
            <Text style={styles.challengeText}>Customer Rewards Signup</Text>
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

  viewChallenge() {
    this.props.router.navigator.push({
      component:ChallengeDetail,
      title:'Fitness'
    });
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
