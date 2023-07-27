import {
  ChatIcon,
  HomeIcon,
  ManageIcon,
  NewsIcon,
  SettingIcon,
} from '@assets/svgs';

interface RenderIconProps {
  index: number;
  color: string;
}

// Render icon for the teacher role in the bottom bar
export const RenderIcon: React.FC<RenderIconProps> = ({index, color}) => {
  switch (index) {
    case 0:
      return <HomeIcon fill={color} />;
    case 1:
      return <ChatIcon fill={color} />;
    case 2:
      return <ManageIcon fill={color} />;
    case 3:
      return <NewsIcon fill={color} />;
    case 4:
      return <SettingIcon fill={color} />;
    default:
      return <HomeIcon fill={color} />;
  }
};
