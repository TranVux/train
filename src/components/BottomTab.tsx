import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {
  ChatIcon,
  HomeIcon,
  ManageIcon,
  NewsIcon,
  SettingIcon,
} from '../assets/svgs';

interface RenderIconProps {
  stroke: string;
  index: number;
  color: string;
}

// Render icon for the teacher role in the bottom bar
export const RenderIcon: React.FC<RenderIconProps> = ({
  index,
  color,
  stroke,
}) => {
  switch (index) {
    case 0:
      return <HomeIcon color={color} stroke={stroke} />;
    case 1:
      return <ChatIcon color={color} stroke={stroke} />;
    case 2:
      return <ManageIcon color={color} stroke={stroke} />;
    case 3:
      return <NewsIcon color={color} stroke={stroke} />;
    case 4:
      return <SettingIcon color={color} stroke={stroke} />;
    default:
      return <HomeIcon color={color} stroke={stroke} />;
  }
};

const BottomTab: React.FC<BottomTabBarProps> = ({navigation, state}) => {
  return (
    <View>
      <Text>BottomTab</Text>
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
