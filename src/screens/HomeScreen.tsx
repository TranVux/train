import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';

import {BellIcon, UserIcon} from '@assets/icons';
import {primary} from '@theme/colors';
import {text500, text700} from '@theme/typography';
import {TabNavigationScreen} from './TabNavigationScreen';
import {LinearGradientApp} from '@components';

export const HomeScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={{backgroundColor: '#EFF5FF', flexGrow: 1}}>
        <View style={{position: 'relative'}}>
          <LinearGradientApp
            colors={['#0055D4', '#0082E9']}
            containerStyle={styles.headerBackground}
          />
          <View style={styles.headerContainer}>
            <View style={styles.avatarContainer}>
              <UserIcon />
            </View>
            <View style={styles.userInfo}>
              <Text
                style={[{color: primary.white, fontSize: scale(14)}, text500]}>
                Xin Chào
              </Text>
              <Text
                style={[{color: primary.white, fontSize: scale(20)}, text700]}>
                Kathryn Murphy
              </Text>
            </View>
            <BellIcon />
          </View>
        </View>

        {/* top top layout */}
        <ScrollView
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <TabNavigationScreen />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerBackground: {
    width: '100%',
    height: scale(90),
    position: 'absolute',
    top: 0,
    left: 0,
  },
  headerContainer: {
    width: 'auto',
    paddingHorizontal: scale(23),
    height: scale(90),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  avatarContainer: {
    width: scale(52),
    aspectRatio: 1,
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  userInfo: {
    flex: 1,
    marginStart: scale(16),
    justifyContent: 'space-between',
  },
});
