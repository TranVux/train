import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const HospitalIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#FF7890"
      fillRule="evenodd"
      d="M14 3a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0V6h-1a1 1 0 1 1 0-2h1V3ZM3 5a1 1 0 0 0-1 1v15a1 1 0 1 0 2 0v-2h16v2a1 1 0 1 0 2 0v-9a1 1 0 1 0-2 0v1.17c-.313-.11-.65-.17-1-.17H9.271A5.694 5.694 0 0 0 4 9.002V6a1 1 0 0 0-1-1Zm17 11a1 1 0 0 0-1-1H4v2h16v-1ZM4 13v-1.996c1.338.059 2.52.836 3.118 1.996H4Zm8-3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Z"
      clipRule="evenodd"
    />
  </Svg>
);
