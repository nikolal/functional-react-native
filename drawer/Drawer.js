import React from 'react';
import { createAppContainer } from 'react-navigation';
import Navigator from '../navigator/Navigator.js';
import DrawerTemplate from './DrawerTemplate.js';

import { createDrawerNavigator } from '@react-navigation/drawer';

const RouteConfigs = ({
  Navigator: { screen: Navigator },
});

const DrawerNavigatorConfig = {
  initialRouteName: 'Navigator',
  contentComponent: ({ navigation }) => <DrawerTemplate navigation={navigation} routes={RouteConfigs} />
};

const Drawer = createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);

export default createAppContainer(Drawer);
