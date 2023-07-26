import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BellIcon} from '../assets/svgs';
import HomeScreen from './HomeScreen';
import ProductScreen from './TabScreen/ProductScreen';
import Analysis from '../components/Analysis';
import {bottomTabRoutes} from '../configs/routes';
import ChatScreen from './ChatScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();

const NavigationScreen: React.FC = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={bottomTabRoutes.home}>
      <BottomTab.Screen name={bottomTabRoutes.home} component={HomeScreen} />
      <BottomTab.Screen name={bottomTabRoutes.chat} component={ChatScreen} />
      <BottomTab.Screen name={bottomTabRoutes.manage} component={HomeScreen} />
      <BottomTab.Screen name={bottomTabRoutes.news} component={HomeScreen} />
      <BottomTab.Screen name={bottomTabRoutes.setting} component={HomeScreen} />
    </BottomTab.Navigator>
    // <HomeScreen />
    // <ProductScreen />
    // <Analysis
    //   colors={['#FB8BAC', '#6DB0FE', '#ACF4C5', '#FFE27A']}
    //   series={[13, 17, 62, 8]}
    //   titles={[
    //     'Sản phẩm sức khỏe',
    //     'Sản phẩm tài sản',
    //     'Sản phẩm du lịch',
    //     'Sản phẩm khác',
    //   ]}
    // />
  );
};

export default NavigationScreen;

const styles = StyleSheet.create({});
