import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useDerivedValue,
  interpolate,
  LinearTransition,
} from 'react-native-reanimated';

import {
  CardMenuItem,
  DEFAULT_MARGIN_ITEM,
  WIDTH_CHILD_ITEM_EXPANDED,
} from './CardMenuItem';

import {DataHeader} from '@assets/mock/data';
import {ArrowDown} from '@assets/icons';
import {text700} from '@theme/typography';

export const AMOUNT_ITEM_OF_ROW = 4;

interface ExpandedItemProps extends DataHeader {
  styles?: ViewStyle;
  cardContainerStyle?: ViewStyle;
}

//transition for expanded item

export const ExpandedItem: React.FC<ExpandedItemProps> = props => {
  const [isExpanded, setIsExpanded] = React.useState<boolean>(
    props.data.length > 0,
  );
  const arrowAnimation = useSharedValue(isExpanded ? 1 : 0);

  const rotation = useDerivedValue(() => {
    return interpolate(arrowAnimation.value, [0, 1], [0, 180]);
  }, []);

  const arrowRotationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: rotation.value + 'deg',
        },
      ],
    };
  }, []);

  const onTitlePress = () => {
    // console.log('title presss');

    if (isExpanded) {
      arrowAnimation.value = withSpring(0, {duration: 400});
    } else {
      arrowAnimation.value = withSpring(1, {duration: 400});
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <Animated.View
      layout={LinearTransition.duration(200)}
      style={[{flexGrow: 1}, {...props?.styles}]}>
      {/* Header expanded item */}
      <Pressable style={styles.header} onPress={onTitlePress}>
        <Text style={styles.headerText}>{props.title}</Text>
        <Animated.View style={[arrowRotationStyle]}>
          <ArrowDown fill={'#000'} />
        </Animated.View>
      </Pressable>

      {/* card item */}
      <View style={{flexGrow: 1}}>
        {isExpanded && (
          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            horizontal
            showsHorizontalScrollIndicator={false}>
            <View
              style={[
                {
                  flex: 1,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  maxWidth:
                    AMOUNT_ITEM_OF_ROW *
                    (WIDTH_CHILD_ITEM_EXPANDED +
                      DEFAULT_MARGIN_ITEM +
                      scale(2)),
                },
                {...props?.cardContainerStyle},
              ]}>
              {props.data.map((item, index) => {
                return <CardMenuItem key={'itemCard' + index} {...item} />;
              })}
            </View>
          </ScrollView>
        )}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: scale(28),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scale(12),
    paddingHorizontal: scale(27),
  },
  headerText: {
    fontSize: scale(20),
    color: '#000',
    flex: 1,
    textTransform: 'capitalize',
    ...text700,
  },
});
