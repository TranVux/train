import {View, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';

import {menuData} from '@assets/mock/data';
import {Analysis, ExpandedItem} from '@components';
import {accent} from '@theme/colors';

export const ProductScreen: React.FC = () => {
  return (
    <ScrollView
      bounces={false}
      alwaysBounceVertical={false}
      style={{
        flexGrow: 1,
        backgroundColor: 'transparent',
        paddingTop: scale(10),
      }}
      showsVerticalScrollIndicator={false}>
      <View style={{flex: 1}}>
        <Analysis
          containerStyle={styles.analysisContainerStyle}
          colors={[accent.pink, accent.info, accent.success, accent.attention]}
          series={[13, 17, 62, 8]}
          titles={[
            'Sản phẩm sức khỏe',
            'Sản phẩm tài sản',
            'Sản phẩm du lịch',
            'Sản phẩm khác',
          ]}
        />
        <View
          style={{
            flexGrow: 1,
            backgroundColor: '#EFF5FF',
            paddingTop: scale(24),
          }}>
          {menuData.map((item, index) => {
            return (
              <ExpandedItem
                styles={styles.expandedItem}
                cardContainerStyle={{marginStart: scale(19)}}
                {...item}
                key={index}
              />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  expandedItem: {
    marginBottom: scale(24),
  },
  analysisContainerStyle: {
    borderRadius: scale(32),
    marginHorizontal: scale(15),
  },
});
