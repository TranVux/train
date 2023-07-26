import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Analysis from '../../components/Analysis';
import ExpandedItem from '../../components/ExpandedItem';
import {menuData} from '../../assets/mock/data';
import {scale} from 'react-native-size-matters';

const ProductScreen: React.FC = () => {
  return (
    <ScrollView
      bounces={false}
      alwaysBounceVertical={false}
      style={{
        flexGrow: 1,
        backgroundColor: 'transparent',
        paddingHorizontal: 10,
        paddingTop: scale(10),
      }}
      showsVerticalScrollIndicator={false}>
      <View style={{flexGrow: 1}}>
        <Analysis
          containerStyle={styles.analysisContainerStyle}
          colors={['#FB8BAC', '#6DB0FE', '#ACF4C5', '#FFE27A']}
          series={[13, 17, 62, 8]}
          titles={[
            'Sản phẩm sức khỏe',
            'Sản phẩm tài sản',
            'Sản phẩm du lịch',
            'Sản phẩm khác',
          ]}
        />
        <View style={{flexGrow: 1, padding: 10, height: 'auto'}}>
          {menuData.map((item, index) => {
            return (
              <ExpandedItem
                styles={styles.expandedItem}
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

export default ProductScreen;

const styles = StyleSheet.create({
  expandedItem: {
    marginBottom: scale(24),
  },
  analysisContainerStyle: {
    borderRadius: scale(32),
  },
});
