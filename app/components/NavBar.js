'use strict';

import React, {
  View,
  Text,
  StyleSheet,
  Navigator,
  TouchableOpacity,
  Component
} from 'react-native';
import Events from '../lib/events';
import Icon from 'react-native-vector-icons/Ionicons';


class NavBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Navigator.NavigationBar routeMapper={NavigationBarRouteMapper} style={styles.navBar} />
    )
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'white',
  },
  navBarText: {
    fontSize: 18,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: '#000',
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
    paddingTop:5
  }
});

var NavigationBarRouteMapper = {

  LeftButton: function(route, navigator, index, navState) {
    return null;
  },

  RightButton: function(route, navigator, index, navState) {
    return null;
  },

  Title: function(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title}
      </Text>
    );
  },

};

module.exports = NavBar;
