import {ScrollView, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {MaterialTopTabApp} from '@components';
import {ProductScreen, SellScreen} from './TabScreen';
import {tabScreen} from '@assets/mock/data';

const TopTab = createMaterialTopTabNavigator();

export const TabNavigationScreen: React.FC = () => {
  return (
    <View style={{flexGrow: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}} scrollEnabled={true}>
        <View style={{flex: 1}}>
          <TopTab.Navigator
            screenOptions={{
              swipeEnabled: false,
            }}
            pagerStyle={{}}
            sceneContainerStyle={{
              backgroundColor: 'transparent',
              flexGrow: 1,
            }}
            tabBar={props => <MaterialTopTabApp {...props} />}>
            <TopTab.Screen
              component={ProductScreen}
              name={tabScreen[0].title}
            />
            <TopTab.Screen component={SellScreen} name={tabScreen[1].title} />
            <TopTab.Screen component={SellScreen} name={tabScreen[2].title} />
          </TopTab.Navigator>
        </View>
      </ScrollView>
    </View>
  );
};
