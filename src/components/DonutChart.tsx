import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {scale} from 'react-native-size-matters';
import Svg, {G, Circle} from 'react-native-svg';

import {text600, text700} from '@theme/typography';

interface DonutChartProps {
  series: number[];
  titles: string[];
  colors: string[];
  size: number;
  strokeWidth: number;
}

interface DonutChartProp {
  series: number;
  title: string;
  color: string;
}

export const DonutChart: React.FC<DonutChartProps> = props => {
  const [chartValue, setChartValue] = React.useState<DonutChartProp[]>([]);
  const [totalValue, setTotalValue] = React.useState<number>(0);
  const [startAngle, setStartAngle] = React.useState<number[]>([]);

  const radius = (props.size - props.strokeWidth) / 2;
  const circleCircumference = 2 * Math.PI * radius;

  const setUpChartValue = (prop: DonutChartProps) => {
    //setup data of chart
    const tempValueChartList = prop.colors.map((color, index) => {
      return {
        color: color,
        title: prop.titles[index],
        series: prop.series[index],
      };
    });
    setChartValue(tempValueChartList);

    //setup total value of chart
    let _tempTotalValue = tempValueChartList.reduce((total, currentValue) => {
      return total + currentValue.series;
    }, 0);
    setTotalValue(_tempTotalValue / 100);

    //setup start angle for chart line
    let angle = 0;
    let angleList: number[] = [];

    tempValueChartList.map(item => {
      angleList.push(angle);
      angle += (item.series / 100) * 360;
    });
    setStartAngle(angleList);
  };

  React.useEffect(() => {
    setUpChartValue(props);
  }, [props]);

  return (
    <View style={styles.container}>
      <View
        style={[styles.graphWrapper, {width: props.size, height: props.size}]}>
        <Svg
          height={props.size}
          width={props.size}
          viewBox={`0 0 ${props.size} ${props.size}`}>
          <G rotation={-90} originX={props.size / 2} originY={props.size / 2}>
            <Circle
              cx={props.size / 2}
              cy={props.size / 2}
              r={radius}
              stroke="#F1F6F9"
              fill="transparent"
              strokeWidth="18"
            />
            {chartValue.length > 0 &&
              totalValue > 0 &&
              chartValue.map((item, index) => {
                return (
                  <Circle
                    cx={props.size / 2}
                    cy={props.size / 2}
                    originX={props.size / 2}
                    originY={props.size / 2}
                    r={radius}
                    key={index}
                    stroke={item.color}
                    fill="transparent"
                    strokeWidth={props.strokeWidth}
                    strokeDasharray={circleCircumference}
                    strokeDashoffset={
                      circleCircumference * (1 - item.series / 100)
                    }
                    strokeLinecap="round"
                    rotation={startAngle[index]}
                  />
                );
              })}
          </G>
        </Svg>
        <View
          style={{
            position: 'absolute',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: scale(10),
              color: '#000',
              ...text600,
            }}>
            Doanh thu
          </Text>
          <Text
            style={{
              fontSize: scale(32),
              color: '#000',
              lineHeight: scale(32),
              marginVertical: 3,
              ...text700,
            }}>
            70tr
          </Text>
          <Text style={{fontSize: scale(10), color: '#000', ...text600}}>
            Tăng 30%
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  graphWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
