'use strict';

import React, {
  View,
  Text,
  StyleSheet,
  NavigatorIOS,
  Component
} from 'react-native';

import Drawer from 'react-native-drawer';
import Profile from './profile/Profile';
import MainMenu from './components/MainMenu';
import Icon from 'react-native-vector-icons/Ionicons';

class App extends Component {

  constructor() {
    super();

    this.state = {
      menuIcon:null
    }

    Icon.getImageSource('navicon', 30, 'red').then((source) => this.setState({ menuIcon: source }));
  }

  render() {

    if(!this.state.menuIcon) {
      return false;
    }

    return(
      <Drawer
        ref="drawer"
        type="static"
        negotiatePan={true}
        openDrawerOffset={100}
        styles={{main: {shadowColor: "#000000", shadowOpacity: 0.4, shadowRadius: 3}}}
        tweenHandler={Drawer.tweenPresets.parallax}
        content={
          <MainMenu/>
        }
        >
        <NavigatorIOS
          style={styles.nav}
          itemWrapperStyle={styles.navContainer}
          barTintColor='#FFF'
          tintColor='#6A6A6A'
          shadowHidden={true}
          initialRoute={{
            component: Profile,
            title: 'My Timeline',
            leftButtonIcon:this.state.menuIcon,
            onLeftButtonPress:this.toggleDrawer.bind(this)
          }}/>
      </Drawer>
    )
  }

  toggleDrawer() {
    this.refs.drawer.toggle();
  }
}

const styles = StyleSheet.create({
  nav: {
    flex:1
  },
  navContainer: {
    backgroundColor:'#EFF0EC'
  }
});

module.exports = App;
