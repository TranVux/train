import React, {FC} from 'react';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import {Animated, FlatList, Pressable, View, ScrollView} from 'react-native';
import {scale} from 'react-native-size-matters';

import {primary} from '@theme/colors';
import {text700} from '@theme/typography';
import Indicator from './Indicator';

const ITEM_GAP = 24;

export const MaterialTopTabApp: FC<MaterialTopTabBarProps> = props => {
  const listRef = React.useRef<FlatList>(null);
  const [tabWidths, setTabWidths] = React.useState<number[]>([]);
  const [tabPositions, setTabPositions] = React.useState<number[]>([]);
  const [layoutWidth, setLayoutWidth] = React.useState<number>(0);

  const inputRange = React.useMemo(() => {
    return props.state.routes?.map((_, index) => index);
  }, [props.state.routes]);

  React.useEffect(() => {
    console.log(tabWidths);
    console.log(tabPositions);
  }, [tabWidths, tabPositions]);

  const _renderItem = ({index, item}: any) => {
    const opacity = props.position.interpolate({
      inputRange,
      outputRange: inputRange.map((_, _index) => (_index === index ? 1 : 0.5)),
    });

    const indicatorOpacity = props.position.interpolate({
      inputRange: [index - 0.8, index, index + 0.8],
      outputRange: [0, 1, 0],
    });

    const scaleX = props.position.interpolate({
      inputRange,
      outputRange: inputRange.map((_, _index) => (_index === index ? 1 : 0)),
    });

    return (
      <Pressable
        onLayout={e => {
          const currentWidth = e.nativeEvent.layout.width;

          const previousWidths = tabWidths.reduce(
            (sum, currentValue) => sum + currentValue,
            0,
          );
          console.log('scale 24: ' + scale(ITEM_GAP));

          setTabWidths(prev => [...prev, currentWidth]);

          if (index == 0) {
            setTabPositions([scale(ITEM_GAP)]);
          } else {
            setTabPositions(prev => [
              ...prev,
              previousWidths + scale(ITEM_GAP),
            ]);
          }
        }}
        onPress={() => {
          props.navigation.navigate(item.name);

          //scroll to current item
          listRef.current?.scrollToIndex({
            animated: true,
            index: index,
            viewPosition: 0.5,
          });
        }}>
        <Animated.Text
          key={index}
          style={[
            {
              fontSize: scale(16),
              color: primary.white,
              opacity,
              textTransform: 'capitalize',
              backgroundColor: 'red',
            },
            text700,
          ]}>
          {item.name}
        </Animated.Text>

        {/* indicator */}
        {/* <View style={{paddingHorizontal: scale(20), marginTop: 8}}>
          <Animated.View
            style={{
              height: 3,
              width: 'auto',
              backgroundColor: primary.white,
              borderRadius: 5,
              transform: [{scaleX}],
              opacity: indicatorOpacity,
            }}
          />
        </View> */}
      </Pressable>
    );
  };

  return (
    <ScrollView
      onLayout={e => {
        setLayoutWidth(e.nativeEvent.layout.width);
      }}
      horizontal
      contentContainerStyle={{
        height: scale(48),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
      }}>
      {tabWidths.length >= props.state.routeNames.length && (
        <Indicator
          listTabPosition={tabPositions}
          layoutWidth={layoutWidth}
          routes={props.state.routeNames}
          listTabWidths={tabWidths}
        />
      )}
      <FlatList
        scrollEventThrottle={1}
        ref={listRef}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          gap: scale(ITEM_GAP),
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: scale(24),
        }}
        scrollEnabled={false}
        data={props.state.routes}
        keyExtractor={item => item.key}
        renderItem={_renderItem}
      />
    </ScrollView>
  );
};
