import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {BottomTabApp} from '@components';
import {bottomTabRoutes} from '@configs/routes';
import {ChatScreen, HomeScreen} from '@screens';

const BottomTab = createBottomTabNavigator();

export const NavigationScreen: React.FC = () => {
  return (
    <BottomTab.Navigator
      sceneContainerStyle={{flexGrow: 1}}
      tabBar={props => <BottomTabApp {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0158D6',
        tabBarInactiveTintColor: '#0000004D',
      }}
      initialRouteName={bottomTabRoutes.home}>
      <BottomTab.Screen name={bottomTabRoutes.home} component={HomeScreen} />
      <BottomTab.Screen name={bottomTabRoutes.chat} component={ChatScreen} />
      <BottomTab.Screen name={bottomTabRoutes.manage} component={ChatScreen} />
      <BottomTab.Screen name={bottomTabRoutes.news} component={ChatScreen} />
      <BottomTab.Screen name={bottomTabRoutes.setting} component={ChatScreen} />
    </BottomTab.Navigator>
  );
};
