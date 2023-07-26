import {StyleSheet, Text, View, Pressable, Dimensions} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import {tabScreen} from '../assets/mock/data';
import TabIndicator from './TabIndicator';
import Animated, {
  Extrapolate,
  interpolate,
  useSharedValue,
} from 'react-native-reanimated';

const {width, height} = Dimensions.get('screen');

interface AppTabBarProps {
  onItemClick: (index: number) => void;
  scrollX: number;
}

export interface MeasureProps {
  x: number;
  y: number;
  width: number;
  height: number;
}

const AppTabBar: React.FC<AppTabBarProps> = ({onItemClick, scrollX}) => {
  const [measure, setMeasure] = React.useState<MeasureProps[]>([]);
  const currentScrollX = useSharedValue(scrollX);
  //container of item tablayout
  const containerRef = React.useRef<any>();
  const listRef = React.useRef<any>();

  //measure item of tab layout
  React.useEffect(() => {
    console.log('scrollX: ' + currentScrollX.value);
  }, [scrollX]);

  return (
    <View style={{width: 'auto', paddingVertical: 5}}>
      <View
        ref={containerRef}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Animated.FlatList
          horizontal
          ref={listRef}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: scale(23), gap: 24}}
          data={tabScreen}
          renderItem={({item, index, separators}) => {
            const inputRange = [index - 1, index, index + 1];

            const scaleIndicator = interpolate(
              currentScrollX.value,
              inputRange,
              [0, 1, 0],
              {
                extrapolateLeft: Extrapolate.CLAMP,
                extrapolateRight: Extrapolate.CLAMP,
              },
            );

            return (
              <Pressable
                ref={item.ref}
                key={item.title + index}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  marginBottom: 8,
                }}
                onPress={() => {
                  onItemClick(index);
                }}>
                <Text style={styles.textItemStyle}>{item.title}</Text>
                <View style={{width: '100%', paddingHorizontal: scale(20)}}>
                  <Animated.View
                    style={{
                      height: 3,
                      borderRadius: 10,
                      backgroundColor: 'white',
                      marginTop: 3,
                      width: '100%',
                      transform: [{scale: scaleIndicator}],
                    }}
                  />
                </View>
              </Pressable>
            );
          }}
        />
        {/* {measure.length > 0 && (
          <TabIndicator measure={measure} scrollX={scrollX} />
        )} */}
      </View>
    </View>
  );
};

export default AppTabBar;

const styles = StyleSheet.create({
  textItemStyle: {
    color: 'white',
    fontWeight: '700',
    textTransform: 'capitalize',
    fontSize: scale(16),
  },
});
