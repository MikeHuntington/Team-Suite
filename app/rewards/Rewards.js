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

class Rewards extends Component {

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
          {this.renderStats()}
        </Tile>

        <Tile>
          {this.renderGift()}
        </Tile>

        <Tile title="Rewards">
          {this.renderRewards()}
        </Tile>
      </ScrollView>

    );
  }

  renderGift() {
    return(
      <View>
        <TouchableOpacity style={{alignItems:'center', margin:10}}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Gift Points</Text>
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

  renderRewards() {
    return (
      <View>
        <TouchableOpacity >
          <View style={styles.meetupContainer}>
            <View style={styles.meetupDate}>
              <View><Text style={[styles.text, styles.pointCount]}>1500</Text></View>
              <View><Text style={[styles.text, styles.pointText]}>POINTS</Text></View>
            </View>
            <Text style={styles.meetupText}>2 Movie Tickets</Text>
            <Icon style={styles.icon} name="chevron-right" color="#DDD" size={35} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.meetupContainer}>
            <View style={styles.meetupDate}>
              <View><Text style={[styles.text, styles.pointCount]}>900</Text></View>
              <View><Text style={[styles.text, styles.pointText]}>POINTS</Text></View>
            </View>
            <Text style={styles.meetupText}>$5 Starbucks Gift</Text>
            <Icon style={styles.icon} name="chevron-right" color="#DDD" size={35} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.meetupContainer}>
            <View style={styles.meetupDate}>
              <View><Text style={[styles.text, styles.pointCount]}>1200</Text></View>
              <View><Text style={[styles.text, styles.pointText]}>POINTS</Text></View>
            </View>
            <Text style={styles.meetupText}>$10 Starbucks Gift</Text>
            <Icon style={styles.icon} name="chevron-right" color="#DDD" size={35} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.meetupContainer}>
            <View style={styles.meetupDate}>
              <View><Text style={[styles.text, styles.pointCount]}>5500</Text></View>
              <View><Text style={[styles.text, styles.pointText]}>POINTS</Text></View>
            </View>
            <Text style={styles.meetupText}>4 SixFlags Passes</Text>
            <Icon style={styles.icon} name="chevron-right" color="#DDD" size={35} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.meetupContainer}>
            <View style={styles.meetupDate}>
              <View><Text style={[styles.text, styles.pointCount]}>400</Text></View>
              <View><Text style={[styles.text, styles.pointText]}>POINTS</Text></View>
            </View>
            <Text style={styles.meetupText}>ADP Backpack</Text>
            <Icon style={styles.icon} name="chevron-right" color="#DDD" size={35} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.meetupContainer}>
            <View style={styles.meetupDate}>
              <View><Text style={[styles.text, styles.pointCount]}>200</Text></View>
              <View><Text style={[styles.text, styles.pointText]}>POINTS</Text></View>
            </View>
            <Text style={styles.meetupText}>Coffee Mug</Text>
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
    backgroundColor:'#c4ab3e',
    borderRadius:10,
    justifyContent:'center'
  },
  pointCount:{
    alignSelf:'stretch',
    color:'white',
    textAlign:'center',
    fontSize:25
  },
  pointText:{
    alignSelf:'stretch',
    color:'white',
    textAlign:'center'
  },
  icon: {
    paddingTop:12
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
});

module.exports = Rewards;
