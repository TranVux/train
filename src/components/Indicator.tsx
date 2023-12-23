import {StyleSheet, Text, View, Animated} from 'react-native';
import React from 'react';

interface IndicatorProps {
  listTabWidths: number[];
  listTabPosition: number[];
  routes: string[];
  layoutWidth: number;
}

const Indicator: React.FC<IndicatorProps> = ({
  routes,
  listTabWidths,
  layoutWidth,
  listTabPosition,
}) => {
  return (
    <Animated.View
      style={{
        height: 3,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        width: listTabWidths[1],
        left: listTabPosition[1],
      }}
    />
  );
};

export default Indicator;

const styles = StyleSheet.create({});
