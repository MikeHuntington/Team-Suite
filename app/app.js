'use strict';

import React, {
  View,
  Text,
  StyleSheet,
  Navigator,
  TouchableOpacity,
  Component
} from 'react-native';

import Drawer from 'react-native-drawer';
import Profile from './profile/Profile';
import MainMenu from './components/MainMenu';
import Icon from 'react-native-vector-icons/Ionicons';
import Parse from 'parse/react-native';
import Events from './lib/events';
import NavBar from './components/NavBar';

class App extends Component {

  constructor() {
    super();

    this.state = {
      menuIcon:null,
      view:Profile
    }

    Icon.getImageSource('navicon', 30, 'red').then((source) => this.setState({ menuIcon: source }));
  }

  componentWillMount() {
    Parse.initialize("myAppId");
    Parse.serverURL = 'http://parse-mellomike.herokuapp.com/parse';
  }

  componentDidMount() {
    Events.on('MenuItemPressed', 'App', this.navigateToView.bind(this));
    Events.on('DrawerButtonPressed', 'App', this.toggleDrawer.bind(this));
  }

  componentWillUnmount() {
    Events.rm('MenuItemPressed', 'App');
    Events.rm('DrawerButtonPressed', 'App');
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
        <Navigator
          ref="router"
          style={styles.nav}
          navigationBar={<Navigator.NavigationBar routeMapper={NavigationBarRouteMapper} style={styles.navBar} />}
          renderScene={this.renderScene.bind(this)}
          initialRoute={{
            title: 'My Timeline'
          }}/>
      </Drawer>
    )
  }

  renderScene(route, navigator) {
    return (
      <this.state.view style={styles.navContainer}/>
    )
  }

  navigateToView(data) {

    this.setState({
      view:data.route.component
    });

     this.refs.router.resetTo({
       title:data.route.title
     });


     this.toggleDrawer();
   }

  toggleDrawer() {
    this.refs.drawer.toggle();
    /*
    var username = "mellomike";
    var pass = "olympus";

    Parse.User.logIn(username, pass, {
      success: (user) => { console.log("loggedIn", user); },
      error: (data, error) => { this.createUser(username, pass); }
    });
    */
  }

  createUser(username, pass) {

    var _user = new Parse.User();
    _user.set("username", username);
    _user.set("password", pass);
    _user.set("email", "mellomike@gmail.com");
    _user.set("points", 20);

    _user.signUp(null, {
      success: (user) => { console.log(user); },
      error: (user, error) => { console.log(user, error); }
    });
  }

}

const styles = StyleSheet.create({
  nav: {
    flex:1
  },
  navContainer: {
    backgroundColor:'#EFF0EC',
    paddingTop: 62
  },
  navBar: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowRadius: 1,
    shadowOffset:{x:0,y:0}
  },
  navBarText: {
    fontSize: 19,
    marginVertical: 10,
    fontFamily:'Roboto-Light'
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
    if (index === 0) {
      return (
        <TouchableOpacity
          onPress={() => Events.trigger('DrawerButtonPressed')}
          style={styles.navBarLeftButton}>
          <Icon name="navicon" size={30} color="#6A6A6A"/>
        </TouchableOpacity>
      )
    }

    var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          {previousRoute.title}
        </Text>
      </TouchableOpacity>
    );
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

module.exports = App;
