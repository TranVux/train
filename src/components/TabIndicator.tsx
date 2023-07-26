import {Dimensions, StyleSheet, Text, View, Animated} from 'react-native';
import React from 'react';
import {MeasureProps} from './AppTabBar';
import {tabScreen} from '../assets/mock/data';

interface TabIndicatorProps {
  scrollX: Animated.Value;
  measure: MeasureProps[];
}

const {width, height} = Dimensions.get('screen');

const TabIndicator: React.FC<TabIndicatorProps> = ({measure, scrollX}) => {
  //input range base view pager
  const inputRange = tabScreen.map((_, index) => index * width);
  const widthOutputRange = measure.map(item => item.width);
  const translationXOutputRange = measure.map(item => item.x);

  return (
    <Animated.View
      style={{
        height: 3,
        borderRadius: 10,
        backgroundColor: 'white',
        position: 'absolute',
        width: 'auto',
        bottom: 0,
      }}
    />
  );
};

export default TabIndicator;

const styles = StyleSheet.create({});
