'use strict';

import React, {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Component
} from 'react-native';

import {BlurView} from 'react-native-blur';
import Tile from '../components/Tile';
import Icon from 'react-native-vector-icons/Ionicons';

class ChallengeDetail extends Component {

  constructor() {
    super();
  }

  render() {
    return(
      <ScrollView style={[styles.container, this.props.style]}>
        <View style={styles.headerContainer}>
          <Image style={styles.bgImage} source={require('../assets/fitness.jpg')}/>
          <Text style={styles.challengeName}>Fitness</Text>
        </View>

        <Tile title="About">
          {this.renderAbout()}
        </Tile>

        <Tile>
          {this.renderJoin()}
        </Tile>

        <Tile title="Current Ranking">
          {this.renderRanking()}
        </Tile>

      </ScrollView>
    )
  }

  renderAbout() {
    return(
      <Text>
      Join us for the 2016 Summer Fitness Challenge! Push yourself to be the best you that you can be.
      Over the next few weeks, we will track and rank participants based off of their steps taken per day.
      So get your Fitbits and Apple Watches ready!
      </Text>
    )
  }

  renderJoin() {
    return(
      <View>
        <TouchableOpacity style={{alignItems:'center', margin:10}}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Join Challenge</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems:'center', margin:10}}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>View Rules</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  renderRanking() {

    var s = {
      name:{
        fontSize:22
      },
      row:  {
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:'#EEE',
        alignSelf:'stretch',
        justifyContent:'space-around',
        marginBottom:10,
        padding:10
      },
      header: {
        borderBottomWidth:0,
        justifyContent:'center'
      },
      headerText: {
        fontSize:20
      },
      container:{
        flex:1
      },
      img:{
        height:100,
        width:100,
        borderRadius:50
      },
      shout:{
        flex:1,
        fontSize:18,
        padding:10,
        paddingTop:0
      },
      rankHolder:{
        position:'relative'
      },
      rankImage:{
        justifyContent:'flex-end',
        alignItems:'center',
        borderWidth:2,
        borderColor:'#c4ab3e'
      },
      badge:{
        borderRadius:15,
        width:30,
        height:30,
        backgroundColor:'#c4ab3e',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:0
      },
      badgeText:{
        color:'white',
        fontSize:15
      }
    };

    return (
      <View style={[s.container]}>
        <View style={[s.row]}>
          <View style={s.rankHolder}>
            <Image style={[s.img, s.rankImage]} source={require('../assets/lady2.jpg')}/>
            <View style={s.badge}>
              <Text style={s.badgeText}>1st</Text>
            </View>
          </View>
          <View style={s.rankHolder}>
            <Image style={[s.img, s.rankImage]} source={require('../assets/lady1.jpg')}/>
            <View style={s.badge}>
              <Text style={s.badgeText}>2nd</Text>
            </View>
          </View>
          <View style={s.rankHolder}>
            <Image style={[s.img, s.rankImage]} source={require('../assets/guy1.jpg')}/>
            <View style={s.badge}>
              <Text style={s.badgeText}>3rd</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  headerContainer: {
    position:'relative',
    height:150,
    marginBottom:20,
    justifyContent:'center',
    backgroundColor:'#000'
  },
  blur: {
    flex:1,
    alignItems:'center'
  },
  bgImage: {
    resizeMode: 'cover',
    position: 'absolute',
    height:200,
    top:0,
    left:0,
    right:0
  },
  challengeName: {
    fontSize:40,
    fontFamily:'Roboto-Medium',
    alignSelf:'center',
    color:'white',
    backgroundColor:'transparent'
  },
  row: {
    flex:1,
    flexDirection:'row',
    alignItems:'stretch'
  },
  text: {
    fontFamily:'Roboto-Light'
  },
  button: {
    borderRadius:30,
    backgroundColor:'#185D6F',
    padding:15,
    width:200,
    alignItems:'center'
  },
  buttonText: {
    fontFamily:'Roboto-Medium',
    fontSize:18,
    backgroundColor:'transparent',
    color:'white'
  }
});

module.exports = ChallengeDetail;
