import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';

export interface CardMenuItemProps {
  avatar: any;
  title: string;
  subTitle?: string;
  description?: string;
  status?: string;
  colors: string;
  containerStyles?: ViewStyle;
}

export const WIDTH_CHILD_ITEM_EXPANDED = scale(112);
export const HEIGHT_CHILD_ITEM_EXPANDED = scale(140);
export const DEFAULT_MARGIN_ITEM = scale(8);

const CardMenuItem: React.FC<CardMenuItemProps> = props => {
  // console.log(props);
  return (
    <View
      style={[
        styles.cardContainer,
        {...props.containerStyles},
        {backgroundColor: props.colors},
      ]}>
      <View style={styles.imageContainer}>{props.avatar()}</View>
      <View style={styles.textContainer}>
        <Text style={styles.mainTitle}>{props.title}</Text>
        {props.subTitle && (
          <Text style={styles.subTitle}>{'(' + props.subTitle + ')'}</Text>
        )}
        <Text style={styles.description}>{props?.description}</Text>
        <Text style={styles.status}>{props?.status}</Text>
      </View>
    </View>
  );
};

export default CardMenuItem;

const styles = StyleSheet.create({
  cardContainer: {
    width: WIDTH_CHILD_ITEM_EXPANDED,
    minHeight: scale(140),
    marginEnd: DEFAULT_MARGIN_ITEM,
    marginBottom: DEFAULT_MARGIN_ITEM,
    borderRadius: scale(16),
    padding: scale(12),
  },
  imageContainer: {
    backgroundColor: 'white',
    aspectRatio: 1,
    width: scale(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    alignSelf: 'flex-start',
  },
  textContainer: {
    paddingTop: scale(12),
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  },
  mainTitle: {
    fontSize: scale(12),
    fontWeight: '700',
    color: '#000',
    textTransform: 'capitalize',
  },
  description: {
    fontSize: scale(10),
    color: '#00000080',
  },
  subTitle: {
    marginBottom: scale(4),
    color: '#000',
    fontWeight: '600',
  },
  status: {
    color: '#000000',
    fontSize: scale(10),
    fontWeight: '700',
  },
});
