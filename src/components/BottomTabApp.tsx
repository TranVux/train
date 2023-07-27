import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {scale} from 'react-native-size-matters';

import {RenderIcon} from '@components';
import {text800} from '@theme/typography';

export const BottomTabApp: React.FC<BottomTabBarProps> = ({
  navigation,
  state,
}) => {
  return (
    <View style={styles.bottomTabContainer}>
      {state.routes.map((item, itemIndex) => {
        const isFocus = state.index == itemIndex;

        const color = isFocus ? '#0158D6' : '#0000004D';
        // console.log('item: ' + itemIndex + ' ' + color);

        return (
          <TouchableOpacity
            activeOpacity={0.8}
            key={item.name}
            onPress={() => {
              navigation.navigate(item.name);
            }}
            style={{
              alignItems: 'center',
            }}>
            <RenderIcon index={itemIndex} color={color} />
            <Text style={[styles.textBottomTabItem, {color}]}>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTabContainer: {
    width: '100%',
    minHeight: scale(92),
    backgroundColor: '#EFF5FF',
    paddingHorizontal: scale(15),
    paddingTop: scale(16),
    paddingBottom: scale(32),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textBottomTabItem: {
    fontSize: scale(10),
    marginTop: scale(4),
    ...text800,
  },
});
