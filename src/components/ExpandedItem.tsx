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
import {ArrowDown} from '../assets/svgs';
import {DataHeader} from '../assets/mock/data';
import CardMenuItem, {
  DEFAULT_MARGIN_ITEM,
  WIDTH_CHILD_ITEM_EXPANDED,
} from './CardMenuItem';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useDerivedValue,
  interpolate,
  LinearTransition,
} from 'react-native-reanimated';

export const AMOUNT_ITEM_OF_ROW = 4;

interface ExpandedItemProps extends DataHeader {
  styles?: ViewStyle;
}

//transition for expanded item

const ExpandedItem: React.FC<ExpandedItemProps> = props => {
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
      style={[{flex: 1}, {...props.styles}]}>
      <Pressable style={styles.header} onPress={onTitlePress}>
        <Text style={styles.headerText}>{props.title}</Text>
        <Animated.View style={[arrowRotationStyle]}>
          <ArrowDown fill={'#000'} />
        </Animated.View>
      </Pressable>
      <View>
        {isExpanded && (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View
              // layout={LinearTransition}
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: 'auto',
                maxWidth:
                  AMOUNT_ITEM_OF_ROW *
                  (WIDTH_CHILD_ITEM_EXPANDED + DEFAULT_MARGIN_ITEM + scale(10)),
              }}>
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

export default ExpandedItem;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: scale(28),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scale(12),
  },
  headerText: {
    fontSize: scale(20),
    color: '#000',
    fontWeight: '700',
    flex: 1,
    textTransform: 'capitalize',
  },
});
