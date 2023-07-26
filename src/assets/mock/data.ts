import React from 'react';
import {CardMenuItemProps} from '../../components/CardMenuItem';
import {
  AccidentIcon,
  AutoIcon,
  BikeIcon,
  DangerIcon,
  FireIcon,
  GroupIcon,
  HospitalIcon,
  InsuranceIcon,
  MultiRisk,
  OthersIcon,
  PersonalIcon,
  TravelIcon,
  TravelGlobalIcon,
  CreditIcon,
  CardIcon,
} from '../svgs';
import {HouseIcon} from '../svgs/House';
import {View} from 'react-native';
export const screenData = {
  name: 'Sản phẩm',
};

export interface DataHeader {
  title: string;
  data: CardMenuItemProps[];
}

export const menuData: DataHeader[] = [
  {
    title: 'Sức Khỏe',
    data: [
      {
        avatar: PersonalIcon,
        title: 'Benefit One',
        subTitle: 'cá nhân',
        description: 'Hoa hồng lên đến',
        status: '48%',
        colors: '#FFCAE7',
      },
      {
        avatar: GroupIcon,
        title: 'Benefit One',
        subTitle: 'nhóm',
        status: 'Sắp ra mắt',
        colors: '#FFCAE7',
      },
      {
        avatar: HospitalIcon,
        title: 'Hộ Trợ Nằm Viện',
        status: 'Sắp ra mắt',
        colors: '#FFB5C2',
      },
      {
        avatar: InsuranceIcon,
        title: 'Bảo Hiểm Y Tế Mở Rộng',
        status: 'Sắp ra mắt',
        colors: '#FFB7D9',
      },
      {
        avatar: DangerIcon,
        title: 'Bệnh Hiểm nghèo',
        status: 'Sắp ra mắt',
        colors: '#FFD6FB',
      },
      {
        avatar: AccidentIcon,
        title: 'Bảo hiểm tai nạn',
        status: 'Sắp ra mắt',
        colors: '#FFB7D9',
      },
    ],
  },
  {
    title: 'Tài sản',
    data: [
      {
        avatar: BikeIcon,
        title: 'Bảo hiểm xe máy',
        status: 'Sắp ra mắt',
        colors: '#A7D5FF',
      },
      {
        avatar: AutoIcon,
        title: 'Bảo hiểm Ô Tô',
        status: 'Sắp ra mắt',
        colors: '#B7CBFF',
      },
      {
        avatar: HouseIcon,
        title: 'Bảo hiểm nhà tư nhân',
        status: 'Sắp ra mắt',
        colors: '#B9BCFF',
      },
      {
        avatar: FireIcon,
        title: 'BH cháy nổ bắt buộc',
        status: 'Sắp ra mắt',
        colors: '#8DEBFF',
      },
      {
        avatar: MultiRisk,
        title: 'BH rủi ro tài sản',
        status: 'Sắp ra mắt',
        colors: '#9FBAFF',
      },
      {
        avatar: OthersIcon,
        title: 'Bảo hiểm tài sản khác',
        status: 'Sắp ra mắt',
        colors: '#C3CEEB',
      },
    ],
  },
  {
    title: 'Du Lịch',
    data: [
      {
        avatar: TravelGlobalIcon,
        title: 'Du lịch toàn cầu',
        status: 'Sắp ra mắt',
        colors: '#CEF3B6',
      },
      {
        avatar: TravelIcon,
        title: 'Du lịch trong nước',
        status: 'Sắp ra mắt',
        colors: '#B6F3B8',
      },
    ],
  },
  {
    title: 'Khác',
    data: [
      {
        avatar: CreditIcon,
        title: 'Bảo hiểm tài sản khác',
        status: 'Sắp ra mắt',
        colors: '#FFE485',
      },
      {
        avatar: CardIcon,
        title: 'Bảo hiểm thẻ cào',
        status: 'Sắp ra mắt',
        colors: '#E4D7A8',
      },
    ],
  },
];

export const tabScreen = [
  {
    title: 'Sản phẩm',
    ref: React.createRef<View>(),
  },
  {title: 'Liên kết bán hàng', ref: React.createRef<View>()},
  {title: 'Khách hàng', ref: React.createRef<View>()},
];

// 'Sản phẩm', 'Liên kết bán hàng', 'Khách hàng'
