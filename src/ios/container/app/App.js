import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  Navigator,
  StatusBar,
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppRoutes } from '../../../common/config';
import {
  SideMenuContent,
  Button,
} from '../../components';
import TodayShifts from '../today';
import PreviousShifts from '../previous';

const SCREEN_WIDTH = Dimensions.get('window').width;

class App extends Component {
  constructor(props) {
    super(props);
    this.init();
  }

  init() {
    this.state = {
      sideMenuOpened: false
    };
  }

  openSideMenu() {
    this.setState({
      sideMenuOpened : false
    });
  }

  closeSideMenu() {
    if (this.state.sideMenuOpened) {
      this.setState({
        sideMenuOpened: false
      });
    }
  }

  toggleSideMenu() {
    this.setState({
      sideMenuOpened: !this.state.sideMenuOpened
    });
  }

  updateSideMenuState(isOpened) {
    this.setState({
      sideMenuOpened: isOpened
    });
  }

  navigate(route) {
    const routeStack = [].concat(this.refs.navigator.getCurrentRoutes());
    const previousRouteId = routeStack[routeStack.length - 1].id;
    if (route.id !== previousRouteId) {
      this.refs.navigator.replace(route);
    }

    if (this.state.sideMenuOpened) {
      this.closeSideMenu();
    }
  }

  renderScene(route, navigator) {
    switch (route.id) {
    case 1:
      const route1 = AppRoutes.getRouteFromRouteId(1);
      return (
        <TodayShifts
          ref={route1.refView}
          navigator={navigator}
          navigate={(toRoute)=>this.navigate(toRoute)}
        />
      );
    case 2:
      const route2 = AppRoutes.getRouteFromRouteId(2);
      return (
        <PreviousShifts
          ref={route2.refView}
          navigator={navigator}
          navigate={(toRoute)=>this.navigate(toRoute)}
        />
      );
    default:
      return (
        <TodayShifts
          ref={route1.refView}
          navigator={navigator}
          navigate={(toRoute)=>this.navigate(toRoute)}
        />
      );
    }
  }

  renderRouteMapper() {
    const routes = AppRoutes.getAllRoutes();
    return  {
      Title : (route, navigator, index, navState) => {
        const currentRouteId  = navState.routeStack[index].id;
        return (
          <Text style={styles.titleNavText}>
            {routes[currentRouteId - 1].navbar.navBarTitle}
          </Text>
        );
      },
      LeftButton : (route, navigator, index, navState) => {
        const currentRouteId  = navState.routeStack[index].id;
        return (
          <Button
            style={styles.leftNavButton}
            onPress={(e)=>this.toggleSideMenu(e)
            }>
            <Icon
              name={routes[currentRouteId - 1].navbar.navBarLeftIconName}
              size={32}
              color={'#333333'}
            />
          </Button>
        );
      },
      RightButton : (route, navigator, index, navState) => {
        return null;
      }
    };

  }

  render() {
    StatusBar.setBarStyle('light-content', true);
    const DEFAULT_ROUTE = { id: 1, refView: 'TodayShiftsView' };

    return (
      <SideMenu
        menu={<SideMenuContent
                backGndColor="#ECECEC"
                navigate={(route)=>this.navigate(route)}
              />}
        isOpen={this.state.sideMenuOpened}
        onChange={(isOpened) => this.updateSideMenuState(isOpened)}
        bounceBackOnOverdraw={false}
        openMenuOffset={SCREEN_WIDTH * 0.8}
        >
        <Navigator
          ref="navigator"
          initialRoute={ DEFAULT_ROUTE }
          sceneStyle={ styles.navigator }
          renderScene={(route, navigator)=>this.renderScene(route, navigator)}
          configureScene={()=>Navigator.SceneConfigs.FadeAndroid}
          navigationBar={
            <Navigator.NavigationBar
              routeMapper={this.renderRouteMapper()}
              style={styles.navBar}
            />
          }
        />
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  navigator: {
    backgroundColor: '#fff',
    borderLeftWidth: 0.5,
    borderLeftColor: '#F1F1F1',
  },
  navBar: {
    backgroundColor: '#fff',
    borderWidth:      0.5,
    borderColor:    '#F1F1F1'
  },
  leftNavButton : {
    flex            : 1,
    flexDirection   : 'column',
    alignItems      : 'center',
    marginTop       : 4,
    paddingTop      : 0,
    paddingBottom   : 10,
    paddingLeft     : 20,
    paddingRight    : 10
  },
  rightNavButton : {
    flex            : 1,
    flexDirection   : 'column',
    alignItems      : 'center',
    marginTop       : 4,
    paddingTop      : 6,
    paddingBottom   : 10,
    paddingLeft     : 10,
    paddingRight    : 10
  },
  titleNavText : {
    marginTop   : 14,
    color       : '#333333'
  }
});

export default App;
