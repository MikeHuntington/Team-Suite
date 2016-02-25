'use strict';

import React, {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Component
} from 'react-native';

import CalendarPicker from 'react-native-calendar-picker';
import Tile from '../components/Tile';
import Icon from 'react-native-vector-icons/Ionicons';
import MeetupDetail from './MeetupDetail.js';

class Meetup extends Component {

  constructor() {
    super();

    this.state = {
      date: new Date()
    }
  }

  onDateChange(date) {
    this.setState({ date: date });
  }

  render() {
    return (
      <ScrollView style={[styles.container, this.props.style]}>
        <Tile>
          <View>
            <CalendarPicker
              selectedDate={this.state.date}
              onDateChange={this.onDateChange.bind(this)} />
          </View>
        </Tile>

        <Tile title="Upcoming Meetups">
          {this.renderMeetups()}
        </Tile>
      </ScrollView>

    );
  }

  onPress() {
    this.props.router.navigator.push({
      component:MeetupDetail,
      title:'Meetup'
    });
  }

  renderMeetups() {
    return (
      <View>
        <TouchableOpacity onPress={this.onPress.bind(this)}>
          <View style={styles.meetupContainer}>
            <View style={styles.meetupDate}>
              <View><Text style={[styles.text, styles.month]}>FEB</Text></View>
              <View><Text style={[styles.text, styles.day]}>28</Text></View>
            </View>
            <Text style={styles.meetupText}>Taco Tuesday</Text>
            <Icon style={styles.icon} name="chevron-right" color="#DDD" size={35} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPress.bind(this)}>
          <View style={styles.meetupContainer}>
            <View style={styles.meetupDate}>
              <View><Text style={[styles.text, styles.month]}>MAR</Text></View>
              <View><Text style={[styles.text, styles.day]}>14</Text></View>
            </View>
            <Text style={styles.meetupText}>Angular Talk</Text>
            <Icon style={styles.icon} name="chevron-right" color="#DDD" size={35} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPress.bind(this)}>
          <View style={styles.meetupContainer}>
            <View style={styles.meetupDate}>
              <View><Text style={[styles.text, styles.month]}>MAR</Text></View>
              <View><Text style={[styles.text, styles.day]}>22</Text></View>
            </View>
            <Text style={styles.meetupText}>Hack-a-Thon Plan</Text>
            <Icon style={styles.icon} name="chevron-right" color="#DDD" size={35} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPress.bind(this)}>
          <View style={styles.meetupContainer}>
            <View style={styles.meetupDate}>
              <View><Text style={[styles.text, styles.month]}>APR</Text></View>
              <View><Text style={[styles.text, styles.day]}>2</Text></View>
            </View>
            <Text style={styles.meetupText}>Release Day Meeting</Text>
            <Icon style={styles.icon} name="chevron-right" color="#DDD" size={35} />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  meetupContainer:{
    height:70,
    flex:1,
    flexDirection:'row',
    alignItems:'stretch',
    alignSelf:'stretch',
    borderBottomWidth:1,
    borderBottomColor:'#EEE',
    paddingBottom:15,
    paddingRight:10,
    marginBottom:15
  },
  row: {
    flex:1,
    flexDirection:'row',
    alignItems:'stretch'
  },
  text: {
    fontFamily:'Roboto-Medium',
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
  meetupText: {
    fontFamily:'Roboto-Medium',
    fontSize:18,
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
  icon: {
    paddingTop:12
  }
});

module.exports = Meetup;
