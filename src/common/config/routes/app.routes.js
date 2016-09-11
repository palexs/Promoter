const routes = [{
  id: 1,
  refView: 'TodayShiftsView',
  sidemenu: {
    sideMenuButtonText: 'Today Shifts',
    iconType: 'Ionicons',
    iconName: 'ios-home-outline',
    iconSize: 22,
  },
  navbar: {
    navBarTitle: 'TodayShifts',
    navBarLeftIconName: 'ios-menu',
    navBarLeftIconSize: 32,
  }
}, {
  id: 2,
  refView: 'PreviousShifts',
  sidemenu: {
    sideMenuButtonText: 'Previous Shifts',
    iconType: 'ionicons',
    iconName: 'soup-can-outline',
    iconSize: 22,
  },
  navbar: {
    navBarTitle: 'Previous Shifts',
    navBarLeftIconName: 'ios-menu',
    navBarLeftIconSize: 32,
  }
}];

class AppRoutesClass {
  getRouteFromRouteId(routeId) {
    const routeFound = routes.find((route) => {
      if (route.id === routeId) {
        return route;
      }
    });
    return routeFound;
  }

  getAllRoutes() {
    return [].concat(routes);
  }
}

let AppRoutes = new AppRoutesClass();

export default AppRoutes;
