'use strict';

import React, {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Component
} from 'react-native';

import {BlurView} from 'react-native-blur';
import Tile from '../components/Tile';
import Icon from 'react-native-vector-icons/Ionicons';

class Profile extends Component {

  constructor() {
    super();
  }

  render() {
    return(
      <ScrollView style={[styles.container, this.props.style]}>
        <View style={styles.headerContainer}>
          <Image style={styles.bgImage} source={{uri:'https://www.igniyte.com/wp-content/uploads/2014/12/Company-Offices.jpg'}}>
            <BlurView blurType="light" style={styles.blur}>
              <Image style={styles.profileImage} source={require('../assets/profile-image.jpg')}></Image>
              <Text style={styles.profileName}>John Doe</Text>
            </BlurView>
          </Image>
        </View>

        <Tile>
          {this.renderStats()}
        </Tile>

        <Tile title="Shout Outs">
          {this.renderShoutOuts()}
        </Tile>

        <Tile title="Challenges">
          {this.renderChallenges()}
        </Tile>

      </ScrollView>
    )
  }


  renderStats() {

    var s = {
      title:{
        fontSize:16
      },
      bigCount:{
        fontSize:40,
        color:'#185D6F'
      },
      row:{

      }
    };

    return (
      <View style={[styles.row, s.row]}>
        <View style={{flex:1, alignItems:'center'}}>
          <Text style={[styles.text, s.title]}>SHOUTS</Text>
          <Text style={[styles.text, s.bigCount]}>23</Text>
        </View>
        <View style={{flex:1, alignItems:'center'}}>
          <Text style={[styles.text, s.title]}>MEETUPS</Text>
          <Text style={[styles.text, s.bigCount]}>9</Text>
        </View>
        <View style={{flex:1, alignItems:'center'}}>
          <Text style={[styles.text, s.title]}>POINTS</Text>
          <Text style={[styles.text, s.bigCount]}>144</Text>
        </View>
      </View>
    )
  }

  renderShoutOuts() {

    var s = {
      name:{
        fontSize:22
      },
      row:  {
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:'#EEE',
        alignSelf:'stretch',
        marginBottom:10,
        padding:10
      },
      container:{
        flex:1
      },
      img:{
        height:50,
        width:50,
        borderRadius:25
      },
      shout:{
        flex:1,
        fontSize:18,
        padding:10,
        paddingTop:0
      }
    };

    return (
      <View style={[s.container]}>
        <View style={[s.row]}>
          <Image style={[s.img]} source={require('../assets/lady1.jpg')}></Image>
          <Text style={[styles.text, s.shout]}>
          Thank you John for organizing the AnguRockr Meetup last week!
          I learned a lot about Angular!
          </Text>
        </View>
        <View style={[s.row]}>
          <Image style={[s.img]} source={require('../assets/guy1.jpg')}></Image>
          <Text style={[styles.text, s.shout]}>
          Thanks John for working over the weekend to help us fix these build issues.
          </Text>
        </View>
        <View style={[s.row]}>
          <Image style={[s.img]} source={require('../assets/lady2.jpg')}></Image>
          <Text style={[styles.text, s.shout]}>
          John I am so glad you made it to the annual ADP breast cancer awareness road race!
          </Text>
        </View>
        <View style={styles.viewMoreHolder}>
          <Text style={[styles.text, styles.viewMoreText]}>VIEW MORE</Text>
        </View>
      </View>
    )
  }

  renderChallenges() {

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
        marginBottom:0,
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
        height:80,
        width:80,
        borderRadius:40
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

        <View style={[s.row, s.header]}>
          <Text style={[styles.text, s.headerText]}>Fitness</Text>
        </View>
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

        <View style={[s.row, s.header]}>
          <Text style={[styles.text, s.headerText]}>Bug Chase</Text>
        </View>
        <View style={[s.row]}>
          <View style={s.rankHolder}>
            <Image style={[s.img, s.rankImage]} source={require('../assets/guy2.png')}/>
            <View style={s.badge}>
              <Text style={s.badgeText}>1st</Text>
            </View>
          </View>
          <View style={s.rankHolder}>
            <Image style={[s.img, s.rankImage]} source={require('../assets/profile-image.jpg')}/>
            <View style={s.badge}>
              <Text style={s.badgeText}>2nd</Text>
            </View>
          </View>
          <View style={s.rankHolder}>
            <Image style={[s.img, s.rankImage]} source={require('../assets/guy3.png')}/>
            <View style={s.badge}>
              <Text style={s.badgeText}>3rd</Text>
            </View>
          </View>
        </View>
        <View style={styles.viewMoreHolder}>
          <Text style={[styles.text, styles.viewMoreText]}>VIEW MORE</Text>
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
    marginBottom:20
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
  profileImage: {
    height:100,
    width:100,
    borderRadius:50,
    borderWidth:2,
    borderColor:'#FFF',
    marginTop:25,
    marginBottom:10
  },
  profileName: {
    fontSize:25,
    color:'#FFF',
    fontFamily:'Roboto-Light'
  },
  row: {
    flex:1,
    flexDirection:'row',
    alignItems:'stretch'
  },
  text: {
    fontFamily:'Roboto-Light'
  },
  viewMoreHolder: {
    alignSelf:'stretch',
    alignItems:'center'
  },
  viewMoreText: {
    fontSize: 14,
    color:'#185D6F'
  }
});

module.exports = Profile;
