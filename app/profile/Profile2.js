'use strict';

import React, {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
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
              <Image style={styles.profileImage} source={require('../assets/guy2.png')}></Image>
              <Text style={styles.profileName}>Vipin Tajane</Text>
            </BlurView>
          </Image>
        </View>

        <Tile>
          {this.renderStats()}
        </Tile>

        <Tile>
          {this.renderGiveShoutout()}
        </Tile>

        <Tile title="Shout Outs">
          {this.renderShoutOuts()}
        </Tile>

      </ScrollView>
    )
  }

  renderGiveShoutout() {
    return(
      <View>
        <TouchableOpacity style={{alignItems:'center', margin:10}}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Give Shout Out</Text>
          </View>
        </TouchableOpacity>
      </View>
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
          <Text style={[styles.text, s.bigCount]}>2</Text>
        </View>
        <View style={{flex:1, alignItems:'center'}}>
          <Text style={[styles.text, s.title]}>MEETUPS</Text>
          <Text style={[styles.text, s.bigCount]}>1</Text>
        </View>
        <View style={{flex:1, alignItems:'center'}}>
          <Text style={[styles.text, s.title]}>POINTS</Text>
          <Text style={[styles.text, s.bigCount]}>90</Text>
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
          <Image style={[styles.img]} source={require('../assets/guy3.png')}></Image>
          <Text style={[styles.text, s.shout]}>
          Vipin congrats on winning the Bug Chase callenge!
          </Text>
        </View>
        <View style={[s.row]}>
          <Image style={[styles.img]} source={require('../assets/lady3.png')}></Image>
          <Text style={[styles.text, s.shout]}>
          Thanks Vipin for bringing Krispy Kreme doughnuts for everyone! They really hit the spot!
          </Text>
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
  },
  img:{
    height:50,
    width:50,
    borderRadius:25
  }
});

module.exports = Profile;
