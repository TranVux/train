import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import Svg, {Defs, Rect, LinearGradient, Stop} from 'react-native-svg';

export interface LinearGradientAppProps {
  colors: string[];
  containerStyle: ViewStyle;
}

export const LinearGradientApp: React.FC<LinearGradientAppProps> = props => {
  return (
    <View style={[{...props.containerStyle}]}>
      <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            {props.colors?.map((color, index) => {
              return (
                <Stop key={color + index} offset={index} stopColor={color} />
              );
            })}
          </LinearGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#grad)" />
      </Svg>
    </View>
  );
};
