'use strict';

import React, {
  View,
  Text,
  StyleSheet,
  ListView,
  Component
} from 'react-native';

class Profile extends Component {

  constructor() {
    super();
  }

  render() {
    return(
      <View style={styles.container}/>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  cellRow: {
    flexDirection:'row',
    alignSelf:'stretch',
    height:200,
    backgroundColor:'#EEE'
  },
  dateContainer: {
    backgroundColor:'#DDD',
    width:100,
    padding:10
  },
  dateBox: {
    backgroundColor:'#FFF',
    alignSelf:'stretch',
    height:100
  },
  detailContainer: {
    flex:1,
    backgroundColor:'#EFF0EC'
  }
});

module.exports = Profile;
