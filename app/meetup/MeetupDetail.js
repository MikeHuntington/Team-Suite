'use strict';

import React, {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  MapView,
  NativeAppEventEmitter,
  Component
} from 'react-native';

import {BlurView} from 'react-native-blur';
import Tile from '../components/Tile';
import Icon from 'react-native-vector-icons/Ionicons';
import RNCalendarReminders from 'react-native-calendar-reminders';

class Profile extends Component {

  constructor() {
    super();
  }

  componentWillMount () {
    this.eventEmitter = NativeAppEventEmitter.addListener('EventReminder', (reminders) => {
      console.log(reminders);
    });
  }

  componentDidMount() {
    RNCalendarReminders.authorizeEventStore((error, auth) => {

    });
  }

  componentWillUnmount () {
    this.eventEmitter.remove();
  }

  _onRegionChange(region) {
    console.log(region);
  }

  render() {
    return(
      <ScrollView style={[styles.container, this.props.style]}>
        <View style={styles.headerContainer}>
        <MapView
          style={styles.map}
          region={{
            latitude: parseFloat(34.0702609758769),
            longitude: parseFloat(-84.27795065256241),
            latitudeDelta: parseFloat(0.005461390493117335),
            longitudeDelta: parseFloat(0.0123620354966647)
          }}
          showsUserLocation={true}
          annotations={[{
            longitude: -84.277840,
            latitude: 34.069609,
            title: 'Taco Tuesday!'
          }]}
        />
        </View>

        <Tile>
          {this.renderDetails()}
        </Tile>

        <Tile>
          {this.renderCheckin()}
        </Tile>

        <Tile>
          {this.renderAttend()}
        </Tile>

        <Tile title="Who's Attending">
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {this.renderAttending()}
          </ScrollView>
        </Tile>

      </ScrollView>
    )
  }

  renderAttend() {
    return(
      <View>
        <TouchableOpacity onPress={this.createReminder.bind(this)} style={{alignItems:'center', margin:10}}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Attend</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  renderCheckin() {
    return(
      <View>
        <TouchableOpacity style={{alignItems:'center', margin:10}}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Check-In</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  createReminder(){
    RNCalendarReminders.saveReminder('Taco Tuesday', {
      location: 'Avalon',
      notes: 'Be there or be square',
      startDate: '2016-02-28T17:45:00.000UTC'
    });
  }


  renderDetails() {

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
      <View style={styles.meetupContainer}>
        <View style={styles.meetupDate}>
          <View><Text style={[styles.text, styles.month]}>FEB</Text></View>
          <View><Text style={[styles.text, styles.day]}>28</Text></View>
        </View>
        <Text style={styles.meetupText}>Taco Tuesday</Text>
      </View>
    )
  }

  renderAttending() {
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
        <Image style={[styles.img, s.img]} source={require('../assets/guy2.png')}></Image>
        <Image style={[styles.img, s.img]} source={require('../assets/guy1.jpg')}></Image>
        <Image style={[styles.img, s.img]} source={require('../assets/lady1.jpg')}></Image>
        <Image style={[styles.img, s.img]} source={require('../assets/guy3.png')}></Image>
        <Image style={[styles.img, s.img]} source={require('../assets/lady3.png')}></Image>
        <Image style={[styles.img, s.img]} source={require('../assets/lady2.jpg')}></Image>
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
    height:300,
    marginBottom:20
  },
  blur: {
    flex:1,
    alignItems:'center'
  },
  map: {
    position: 'absolute',
    height:360,
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
    fontFamily:'Roboto-Light',
    backgroundColor:'transparent'
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
  },
  meetupText: {
    fontFamily:'Roboto-Medium',
    fontSize:25,
    color:'#185D6F',
    flex:1,
    textAlign:'justify',
    paddingTop:15,
    paddingLeft:20
  },
  meetupDate: {
    width:70,
    backgroundColor:'#be2021',
    borderRadius:10,
    justifyContent:'center'
  },
  month:{
    alignSelf:'stretch',
    color:'white',
    textAlign:'center'
  },
  day:{
    alignSelf:'stretch',
    color:'white',
    textAlign:'center',
    fontSize:28
  },
  meetupContainer:{
    height:70,
    flex:1,
    flexDirection:'row',
    alignItems:'stretch',
    alignSelf:'stretch',
    paddingRight:10
  }
});

module.exports = Profile;
