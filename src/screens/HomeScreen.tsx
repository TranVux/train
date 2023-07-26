import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {BellIcon, UserIcon} from '../assets/svgs';
import {scale} from 'react-native-size-matters';
import TabNavigationScreen from './TabNavigationScreen';

const HomeScreen: React.FC = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#0055D4" />
      <View style={{flex: 1}}>
        <View style={{position: 'relative'}}>
          <LinearGradient
            style={styles.headerBackground}
            colors={['#0055D4', '#0082E9']}
          />
          <View style={styles.headerContainer}>
            <View style={styles.avatarContainer}>
              <UserIcon />
            </View>
            <View style={styles.userInfo}>
              <Text
                style={{color: '#fff', fontSize: scale(14), fontWeight: '300'}}>
                Xin Chào
              </Text>
              <Text
                style={{color: '#fff', fontSize: scale(20), fontWeight: '400'}}>
                Kathryn Murphy
              </Text>
            </View>
            <BellIcon />
          </View>
        </View>
        {/* <ScrollView
          bounces={false}
          alwaysBounceVertical={false}
          style={{flex: 1}}
          showsVerticalScrollIndicator={false}> */}
        <TabNavigationScreen />
        {/* </ScrollView> */}
      </View>
    </View>
  );
};

export default HomeScreen;

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
