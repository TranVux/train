import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import ProductScreen from './TabScreen/ProductScreen';
import SellScreen from './TabScreen/SellScreen';
import LinearGradient from 'react-native-linear-gradient';
import {scale} from 'react-native-size-matters';
import PagerView from 'react-native-pager-view';
import AppTabBar from '../components/AppTabBar';
import {tabScreen} from '../assets/mock/data';
import Animated, {
  useEvent,
  useHandler,
  useSharedValue,
} from 'react-native-reanimated';

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

const {width, height} = Dimensions.get('screen');

export function usePagerScrollHandler(handlers: any, dependencies?: any) {
  const {context, doDependenciesDiffer} = useHandler(handlers, dependencies);
  const subscribeForEvents = ['onPageScroll'];

  return useEvent<any>(
    event => {
      'worklet';
      const {onPageScroll} = handlers;
      if (onPageScroll && event.eventName.endsWith('onPageScroll')) {
        onPageScroll(event, context);
      }
    },
    subscribeForEvents,
    doDependenciesDiffer,
  );
}

const TabNavigationScreen: React.FC = () => {
  const viewPagerRef = React.useRef<any>();
  const scrollX = useSharedValue(0);

  const handler = usePagerScrollHandler({
    onPageScroll: (e: any) => {
      'worklet';
      // console.log(e.position);
      scrollX.value = e.position;
    },
  });

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: '#EFF5FF',
      }}
      nestedScrollEnabled={false}
      showsVerticalScrollIndicator={false}>
      <View style={{flexGrow: 1}}>
        <LinearGradient
          style={[
            styles.headerBackground,
            {
              borderBottomRightRadius: scale(75),
              borderBottomLeftRadius: scale(75),
            },
          ]}
          colors={['#0082E9', '#00B2FF']}
        />
        <AppTabBar
          scrollX={scrollX.value}
          onItemClick={i => {
            viewPagerRef.current.setPage(i);
          }}
        />
        <AnimatedPagerView
          onPageScroll={handler}
          ref={viewPagerRef}
          style={{flex: 1}}
          initialPage={0}>
          <ProductScreen key={tabScreen[0].title} />
          <SellScreen key={tabScreen[1].title} />
          <SellScreen key={tabScreen[2].title} />
        </AnimatedPagerView>
      </View>
    </ScrollView>
  );
};

export default TabNavigationScreen;

const styles = StyleSheet.create({
  indicator: {
    backgroundColor: 'white',
    borderRadius: 50,
    height: 3,
  },
  tabBarLabel: {
    fontWeight: '700',
    textTransform: 'capitalize',
    fontSize: scale(16),
    textAlign: 'center',
  },
  headerBackground: {
    width: '100%',
    height: scale(90),
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
