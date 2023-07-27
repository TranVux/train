import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  Modal,
  Pressable,
} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import {Calendar, LocaleConfig} from 'react-native-calendars';

import {primary} from '@theme/colors';
import {CalendarIcon} from '@assets/icons';
import {DonutChart} from '@components';
import {text500, text700} from '@theme/typography';

interface AnalysisPropsItem {
  titles: string[];
  colors: string[];
  series: number[];
  containerStyle?: ViewStyle;
}

LocaleConfig.locales['vn'] = {
  monthNames: [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ],
  monthNamesShort: [
    'Th1',
    'Th2',
    'Th3',
    'Th4',
    'Th5',
    'Th6',
    'Th7',
    'Th8',
    'Th9',
    'Th10',
    'Th11',
    'Th12',
  ],
  dayNames: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'],
  dayNamesShort: ['Th2', 'Th3', 'Th4', 'Th5', 'Th6', 'Th7', 'CN'],
};

export const Analysis: React.FC<AnalysisPropsItem> = props => {
  const [currentMonth, setCurrentMonth] = React.useState('7');
  const [dialogVisible, setDialogVisible] = React.useState(false);

  const handleCancel = () => {
    setDialogVisible(false);
  };

  return (
    <View
      style={[
        {
          backgroundColor: primary.white,
          padding: scale(15),
        },
        {...props.containerStyle},
      ]}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Tổng quan tháng {currentMonth}</Text>
        <CalendarIcon
          onPress={() => {
            setDialogVisible(true);
          }}
        />
      </View>
      <View style={styles.mainContainer}>
        <DonutChart
          size={scale(124)}
          strokeWidth={scale(16)}
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
                    },
                    text700,
                  ]}>
                  {props.series[index]}%
                </Text>
              </View>
            );
          })}
        </View>
      </View>
      {/* <Calendar
          style={{}}
          onDayPress={day => {
            setCurrentMonth(day.month.toString());
            handleCancel();
          }}
          markedDates={{
            [currentMonth]: {
              selected: true,
              disableTouchEvent: true,
            },
          }}
          theme={{
            arrowColor: primary.blue,
            todayBackgroundColor: primary.blue,
            todayTextColor: primary.white,
          }}
        /> */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={dialogVisible}
        onRequestClose={() => {
          setDialogVisible(false);
        }}>
        <Pressable
          onPress={handleCancel}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00000061',
          }}>
          <View
            style={{
              padding: scale(10),
              backgroundColor: '#fff',
              elevation: 10,
              borderRadius: 10,
            }}>
            <Calendar
              style={{}}
              onDayPress={day => {
                setCurrentMonth(day.month.toString());
                handleCancel();
              }}
              markedDates={{
                [currentMonth]: {
                  selected: true,
                  disableTouchEvent: true,
                },
              }}
              theme={{
                arrowColor: primary.blue,
                todayBackgroundColor: primary.blue,
                todayTextColor: primary.white,
              }}
            />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

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
    textTransform: 'capitalize',
    ...text700,
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: scale(14),
  },
  baseTextStyle: {
    color: '#000',
    fontSize: scale(12),
    ...text500,
  },
});
