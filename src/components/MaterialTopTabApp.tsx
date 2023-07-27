import React, {FC} from 'react';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import {Animated, FlatList, Pressable, View, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {primary} from '@theme/colors';
import {text700} from '@theme/typography';
import {LinearGradientApp} from './LinearGradientApp';

export const MaterialTopTabApp: FC<MaterialTopTabBarProps> = props => {
  const listRef = React.useRef<FlatList>(null);

  const inputRange = React.useMemo(() => {
    return props.state.routes?.map((_, index) => index);
  }, [props.state.routes]);

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
            },
            text700,
          ]}>
          {item.name}
        </Animated.Text>

        {/* indicator */}
        <View style={{paddingHorizontal: scale(20), marginTop: 8}}>
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
        </View>
      </Pressable>
    );
  };

  return (
    <View
      style={{
        height: scale(48),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
      }}>
      <LinearGradientApp
        containerStyle={styles.headerBackground}
        colors={['#0082E9', '#00B2FF']}
      />
      <FlatList
        scrollEventThrottle={1}
        ref={listRef}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          gap: scale(24),
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: scale(24),
        }}
        data={props.state.routes}
        keyExtractor={item => item.key}
        renderItem={_renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerBackground: {
    width: '100%',
    height: scale(120),
    position: 'absolute',
    top: 0,
    left: 0,
    borderBottomRightRadius: scale(75),
    borderBottomLeftRadius: scale(75),
    overflow: 'hidden',
  },
});
