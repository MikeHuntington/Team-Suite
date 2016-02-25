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
import Profile from '../profile/Profile2.js';

class ShoutOuts extends Component {

  constructor() {
    super();
  }

  render() {
    return(
      <ScrollView style={[styles.container, this.props.style]}>

        <Tile title="My Team">
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {this.renderEmployeeList()}
          </ScrollView>
        </Tile>

        <Tile title="Latest Shout Outs">
          {this.renderShoutOuts()}
        </Tile>

      </ScrollView>
    )
  }

  viewProfile() {
    this.props.router.navigator.push({
      component:Profile,
      title:'Vipin\'s Profile'
    });
  }

  renderEmployeeList() {
    var s = {
      container:{
        flexDirection:'row',
        padding:10
      },
      img: {
        margin:5,
        marginRight:10,
        height:100,
        width:100,
        borderRadius:50
      }
    };

    return(
      <View style={[s.container]}>
        <TouchableOpacity onPress={this.viewProfile.bind(this)}>
          <Image style={[styles.img, s.img]} source={require('../assets/guy2.png')}></Image>
        </TouchableOpacity>
        <Image style={[styles.img, s.img]} source={require('../assets/guy1.jpg')}></Image>
        <Image style={[styles.img, s.img]} source={require('../assets/lady1.jpg')}></Image>
        <Image style={[styles.img, s.img]} source={require('../assets/guy3.png')}></Image>
        <Image style={[styles.img, s.img]} source={require('../assets/lady3.png')}></Image>
        <Image style={[styles.img, s.img]} source={require('../assets/lady2.jpg')}></Image>
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
          <Image style={[styles.img]} source={require('../assets/lady3.png')}></Image>
          <Text style={[styles.text, s.shout]}>
          Paul your presentation today rocked! Keep up the great work!
          </Text>
        </View>
        <View style={[s.row]}>
          <Image style={[styles.img]} source={require('../assets/guy1.jpg')}></Image>
          <Text style={[styles.text, s.shout]}>
          Thanks John for working over the weekend to help us fix these build issues.
          </Text>
        </View>
        <View style={[s.row]}>
          <Image style={[styles.img]} source={require('../assets/guy3.png')}></Image>
          <Text style={[styles.text, s.shout]}>
          Vipin congrats on winning the Bug Chase callenge!
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
  img:{
    height:50,
    width:50,
    borderRadius:25
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

module.exports = ShoutOuts;
