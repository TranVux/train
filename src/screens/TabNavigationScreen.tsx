import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {scale} from 'react-native-size-matters';

import {MaterialTopTabApp} from '@components';
import {ProductScreen, SellScreen} from './TabScreen';
import {tabScreen} from '@assets/mock/data';

const TopTab = createMaterialTopTabNavigator();

export const TabNavigationScreen: React.FC = () => {
  return (
    <View style={{flexGrow: 1, overflow: 'scroll'}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}} scrollEnabled={true}>
        <View style={{flex: 1}}>
          <LinearGradient
            style={styles.headerBackground}
            colors={['#0082E9', '#00B2FF']}
          />
          <TopTab.Navigator
            screenOptions={{
              swipeEnabled: false,
            }}
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

const styles = StyleSheet.create({
  headerBackground: {
    width: '100%',
    height: scale(120),
    position: 'absolute',
    top: 0,
    left: 0,
    borderBottomRightRadius: scale(75),
    borderBottomLeftRadius: scale(75),
  },
});
