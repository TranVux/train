import React from 'react';
import {CardMenuItemProps} from '@components/CardMenuItem';
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
import {accent, label} from '@theme/colors';
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
        colors: label.pink,
      },
      {
        avatar: GroupIcon,
        title: 'Benefit One',
        subTitle: 'nhóm',
        status: 'Sắp ra mắt',
        colors: label.pink,
      },
      {
        avatar: HospitalIcon,
        title: 'Hộ Trợ Nằm Viện',
        status: 'Sắp ra mắt',
        colors: label.hospital,
      },
      {
        avatar: InsuranceIcon,
        title: 'Bảo Hiểm Y Tế Mở Rộng',
        status: 'Sắp ra mắt',
        colors: label.insurance,
      },
      {
        avatar: DangerIcon,
        title: 'Bệnh Hiểm nghèo',
        status: 'Sắp ra mắt',
        colors: label.cancer,
      },
      {
        avatar: AccidentIcon,
        title: 'Bảo hiểm tai nạn',
        status: 'Sắp ra mắt',
        colors: label.personal,
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
        colors: label.blue,
      },
      {
        avatar: AutoIcon,
        title: 'Bảo hiểm Ô Tô',
        status: 'Sắp ra mắt',
        colors: label.purple,
      },
      {
        avatar: HouseIcon,
        title: 'Bảo hiểm nhà tư nhân',
        status: 'Sắp ra mắt',
        colors: label.house,
      },
      {
        avatar: FireIcon,
        title: 'BH cháy nổ bắt buộc',
        status: 'Sắp ra mắt',
        colors: label.mint,
      },
      {
        avatar: MultiRisk,
        title: 'BH rủi ro tài sản',
        status: 'Sắp ra mắt',
        colors: label.multi_risk,
      },
      {
        avatar: OthersIcon,
        title: 'Bảo hiểm tài sản khác',
        status: 'Sắp ra mắt',
        colors: label.anti_thief,
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
        colors: label.green,
      },
      {
        avatar: TravelIcon,
        title: 'Du lịch trong nước',
        status: 'Sắp ra mắt',
        colors: label.medium_green,
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
        colors: label.yellow,
      },
      {
        avatar: CardIcon,
        title: 'Bảo hiểm thẻ cào',
        status: 'Sắp ra mắt',
        colors: label.life,
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
