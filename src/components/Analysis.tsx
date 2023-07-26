import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import {CalendarIcon} from '../assets/svgs';
import DonutChart from './DonutChart';

interface AnalysisPropsItem {
  titles: string[];
  colors: string[];
  series: number[];
  containerStyle?: ViewStyle;
}

const Analysis: React.FC<AnalysisPropsItem> = props => {
  return (
    <View
      style={[
        {
          backgroundColor: 'white',
          padding: scale(20),
        },
        {...props.containerStyle},
      ]}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Tổng quan tháng 08</Text>
        <CalendarIcon />
      </View>
      <View style={styles.mainContainer}>
        <DonutChart
          size={scale(124)}
          strokeWidth={scale(18)}
          colors={props.colors}
          series={props.series}
          titles={props.titles}
        />
        <View style={{rowGap: 4}}>
          {props.titles.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: scale(12),
                    aspectRatio: 1,
                    borderRadius: 20,
                    backgroundColor: props.colors[index],
                  }}
                />
                <Text style={[styles.baseTextStyle, {marginStart: 8}]}>
                  {item}
                </Text>
                <Text
                  style={[
                    styles.baseTextStyle,
                    {
                      marginStart: 5,
                      fontWeight: '700',
                    },
                  ]}>
                  {props.series[index]}%
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Analysis;

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#000',
    fontSize: scale(20),
    lineHeight: 28,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: scale(8),
  },
  baseTextStyle: {
    color: '#000',
    fontSize: scale(12),
  },
});
